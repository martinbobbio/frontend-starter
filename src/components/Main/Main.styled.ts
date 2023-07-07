// Constants
import { CONFIG } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const MainStyled = styled.div`
  svg {
    margin: 16px 8px;
  }
`;

export const TitleContainer = styled.div`
  margin: 8px 0 24px 0;
`;

export const IconsContainer = styled.div`
  background: ${({ theme }) => theme.palette.default.background2};
  box-shadow: ${CONFIG.theme.boxShadow.medium};
  border-radius: 8px;
  padding: 12px 24px;
  display: inline-block;
`;
