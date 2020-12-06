/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';

export default () => {
  return <Logo id="feature-svg-component" />;
};

export const SvgComponentWithRef = React.forwardRef((props, ref) => (
  <Logo id="feature-svg-component-with-ref" ref={ref} />
));
