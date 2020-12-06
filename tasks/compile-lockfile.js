#!/usr/bin/env node
/** This source code is forked from https://github.com/facebook/create-react-app **/

'use strict';

const cprocess = require('child_process');
const fse = require('fs-extra');
const os = require('os');
const path = require('path');

const temp = path.join(os.tmpdir(), `cra-compile-lockfile`);

try {
  // Ensures that we start from a clean state
  fse.removeSync(temp);
  fse.mkdirSync(temp);

  // Create an empty package.json that we'll populate
  fse.writeFileSync(path.join(temp, 'package.json'), '{}');

  // Extract the dependencies from brahmos-scripts (which is a workspace)
  const dependencies = require('brahmos-scripts/package.json').dependencies;
  const descriptors = Object.keys(dependencies).map(
    dep => `${dep}@${dependencies[dep]}`
  );

  // Run "yarn add" with all the dependencies of brahmos-scripts
  cprocess.execFileSync('yarn', ['add', ...descriptors], { cwd: temp });

  // Store the generated lockfile in create-brahmos-app
  // We can't store it inside brahmos-scripts, because we need it even before brahmos-scripts is installed
  fse.copySync(
    path.join(temp, 'yarn.lock'),
    path.join(
      __dirname,
      '..',
      'packages',
      'create-brahmos-app',
      'yarn.lock.cached'
    )
  );
} finally {
  fse.removeSync(temp);
}
