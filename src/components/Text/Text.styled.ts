// Constants
import {
  CONFIG,
  SupportedColors,
  SupportedSizes,
  SupportedWeights,
} from '@/constants';
// Libreries
import { Typography } from '@mui/material';
import { styled } from 'styled-components';

interface TextStyledProps {
  _size: SupportedSizes;
  _weight: SupportedWeights;
  _color: SupportedColors;
}

export const TextStyled = styled(Typography)<TextStyledProps>`
  &.text {
    color: ${({ theme, _color }) => theme.palette[_color].main};
    font-size: ${({ _size }) => CONFIG.theme.fontSize[_size]};
    line-height: ${({ _size }) => CONFIG.theme.lineHeight[_size]};
    font-weight: ${({ _weight }) => CONFIG.theme.fontWeight[_weight]};
  }
`;
