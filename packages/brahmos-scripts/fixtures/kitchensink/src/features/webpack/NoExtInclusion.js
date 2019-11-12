/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import aFileWithoutExt from './assets/aFileWithoutExt';

const text = aFileWithoutExt.includes('base64')
  ? atob(aFileWithoutExt.split('base64,')[1]).trim()
  : aFileWithoutExt;

export default () => (
  <a id="feature-no-ext-inclusion" href={text}>
    aFileWithoutExt
  </a>
);
