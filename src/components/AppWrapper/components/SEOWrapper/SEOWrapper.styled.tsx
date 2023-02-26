// React
import React from 'react';
// Props
import {Props} from './SEOWrapper';
// Libreries
import styled from 'styled-components';

/**
 * Function that add style to the component.
 *
 * @param component for apply styles.
 * @return Styled Component
 */
export default (component: React.FC<Props>) => {
  return styled(component)(() => {
    return `
  `;
  });
};
