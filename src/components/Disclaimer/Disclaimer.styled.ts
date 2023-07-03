// Libreries
import { styled } from 'styled-components';

const DisclaimerStyled = styled.div`
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

export { DisclaimerStyled };
