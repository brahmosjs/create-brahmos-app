/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import aFileWithExtUnknown from './assets/aFileWithExt.unknown';

const text = aFileWithExtUnknown.includes('base64')
  ? atob(aFileWithExtUnknown.split('base64,')[1]).trim()
  : aFileWithExtUnknown;

export default () => (
  <a id="feature-unknown-ext-inclusion" href={text}>
    aFileWithExtUnknown
  </a>
);
