// Libreries
import { styled } from 'styled-components';

export const FooterStyled = styled.div`
  margin: 64px 0 0 0;
  padding: 32px;
  width: 100%;
  font-weight: 500;
  background: ${({ theme }) => theme.palette.primary.main};
`;
