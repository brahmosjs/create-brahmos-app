/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import './assets/style.css';
import { test, version } from 'test-integrity';

export default () => {
  const v = version();
  if (!test() || v !== '2.0.0') {
    throw new Error('Functionality test did not pass.');
  }
  return <p id="feature-linked-modules">{v}</p>;
};
