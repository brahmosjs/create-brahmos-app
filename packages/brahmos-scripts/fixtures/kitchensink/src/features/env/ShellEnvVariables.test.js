/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import ShellEnvVariables from './ShellEnvVariables';

describe('shell env variables', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShellEnvVariables />, div);
  });
});
