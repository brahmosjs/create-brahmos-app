/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import PublicUrl from './PublicUrl';

describe('PUBLIC_URL', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PublicUrl />, div);
  });
});
