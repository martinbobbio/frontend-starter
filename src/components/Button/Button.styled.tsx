// React
import React from 'react';
// Props
import {Props} from './Button';
// Libreries
import styled from 'styled-components';

/**
 * @function default
 * @param component props props
 * @return Styled Component
 */
export default (component: React.FC<Props>) => {
  return styled(component)(() => {
    return `
      background: red;
      width: 100px;
      height: 50px;
  `;
  });
};
