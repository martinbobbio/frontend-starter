// Libreries
import { styled } from 'styled-components';

const MainStyled = styled.div`
  svg {
    color: ${(props) => props.theme.palette.primary.main};
    width: 24px;
    height: 24px;
    margin: 16px 8px;
  }
`;

const Title = styled.div`
  margin: 24px 0;
`;

const IconsContainer = styled.div`
  background: ${(props) => props.theme.palette.white.main};
  border-radius: 8px;
  padding: 12px 24px;
  display: inline-block;
`;

export { MainStyled, Title, IconsContainer };
