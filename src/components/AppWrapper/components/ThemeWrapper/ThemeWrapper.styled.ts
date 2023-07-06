// Libreries
import { styled } from 'styled-components';

export const ThemeWrapperStyled = styled.div`
  background: ${({ theme }) => theme.palette.body.main};
  min-height: 100vh;
`;
