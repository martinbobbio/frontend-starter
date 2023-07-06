// Libreries
import { styled } from 'styled-components';

export const DisclaimerStyled = styled.div`
  padding: 64px 0 0 0;
  img {
    margin: 32px 16px;
    will-change: filter;
    transition: filter 300ms;
    width: 80px;
    height: 80px;
  }
  img:hover {
    filter: drop-shadow(0 0 32px ${({ theme }) => theme.palette.primary.main});
  }
`;
