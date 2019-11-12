/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import ScssModulesInclusion from './ScssModulesInclusion';

describe('scss modules inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScssModulesInclusion />, div);
  });
});
