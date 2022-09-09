// React
import React from 'react';
// Props
import {Props} from './Home';
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
  `;
  });
};
