/** This source code is forked from https://github.com/facebook/create-react-app **/

import initDOM from './initDOM';

describe('Integration', () => {
  describe('jsconfig.json/tsconfig.json', () => {
    let doc;

    afterEach(() => {
      doc && doc.defaultView.close();
      doc = undefined;
    });

    it('Supports setting baseUrl to src', async () => {
      doc = await initDOM('base-url');

      expect(doc.getElementById('feature-base-url').childElementCount).toBe(4);
    });
  });
});
