// Libreries
import { styled } from 'styled-components';

export const ThemeWrapperStyled = styled.div`
  background: ${({ theme }) => theme.palette.default.background1};
  min-height: 100vh;
`;
