/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import { test, version } from 'test-integrity';
import LinkedModules from './LinkedModules';

describe('linked modules', () => {
  it('has integrity', () => {
    expect(test());
    expect(version() === '2.0.0');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkedModules />, div);
  });
});
