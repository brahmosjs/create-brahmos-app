/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';

describe('dynamic import', () => {
  it('renders without crashing', async () => {
    const DynamicImport = (await import('./DynamicImport')).default;
    const div = document.createElement('div');
    ReactDOM.render(<DynamicImport />, div);
    expect(div.textContent).toBe('Hello World!');
  });
});
