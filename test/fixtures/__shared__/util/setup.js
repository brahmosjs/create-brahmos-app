const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const tempy = require('tempy');
const ReactScripts = require('./scripts');

module.exports = class TestSetup {
  constructor(fixtureName, templateDirectory, { pnp = true } = {}) {
    this.fixtureName = fixtureName;

    this.templateDirectory = templateDirectory;
    this.testDirectory = null;
    this._scripts = null;

    this.setup = this.setup.bind(this);
    this.teardown = this.teardown.bind(this);

    this.isLocal = !(process.env.CI && process.env.CI !== 'false');
    this.settings = { pnp: pnp && !this.isLocal };
  }

  async setup() {
    await this.teardown();
    this.testDirectory = tempy.directory();
    await fs.copy(
      path.resolve(__dirname, '..', 'template'),
      this.testDirectory
    );
    await fs.copy(this.templateDirectory, this.testDirectory);
    await fs.remove(path.resolve(this.testDirectory, 'test.partial.js'));
    await fs.remove(path.resolve(this.testDirectory, '.disable-pnp'));

    const packageJson = await fs.readJson(
      path.resolve(this.testDirectory, 'package.json')
    );

    const shouldInstallScripts = !this.isLocal;
    if (shouldInstallScripts) {
      packageJson.dependencies = Object.assign({}, packageJson.dependencies, {
        'brahmos-scripts': 'latest',
      });
    }
    packageJson.scripts = Object.assign({}, packageJson.scripts, {
      start: 'brahmos-scripts start',
      build: 'brahmos-scripts build',
      test: 'brahmos-scripts test',
    });
    packageJson.license = packageJson.license || 'UNLICENSED';
    await fs.writeJson(
      path.resolve(this.testDirectory, 'package.json'),
      packageJson
    );

    await execa(
      'yarnpkg',
      [
        'install',
        this.settings.pnp ? '--enable-pnp' : null,
        '--mutex',
        'network',
      ].filter(Boolean),
      {
        cwd: this.testDirectory,
      }
    );

    if (!shouldInstallScripts) {
      await fs.ensureSymlink(
        path.resolve(
          path.resolve(
            __dirname,
            '../../../..',
            'packages',
            'brahmos-scripts',
            'bin',
            'brahmos-scripts.js'
          )
        ),
        path.join(this.testDirectory, 'node_modules', '.bin', 'brahmos-scripts')
      );
      await execa('yarnpkg', ['link', 'brahmos-scripts'], {
        cwd: this.testDirectory,
      });
    }
  }

  get scripts() {
    if (this.testDirectory == null) {
      return null;
    }
    if (this._scripts == null) {
      this._scripts = new ReactScripts(this.testDirectory);
    }
    return this._scripts;
  }

  async teardown() {
    if (this.testDirectory != null) {
      try {
        await fs.remove(this.testDirectory);
      } catch (ex) {
        if (this.isLocal) {
          throw ex;
        } else {
          // In CI, don't worry if the test directory was not able to be deleted
        }
      }
      this.testDirectory = null;
      this._scripts = null;
    }
  }
};
