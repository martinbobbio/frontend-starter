// Libreries
import { styled } from 'styled-components';

const MainStyled = styled.div`
  h1,
  svg {
    color: ${(props) => props.theme.colors.white};
  }
  svg {
    color: ${(props) => props.theme.colors.primary};
    width: 24px;
    height: 24px;
    margin: 16px 8px;
  }
`;

export { MainStyled };
