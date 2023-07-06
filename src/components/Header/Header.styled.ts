// Libreries
import { Button } from '@mui/material';
import { styled } from 'styled-components';

export const HeaderStyled = styled.div`
  height: 64px;
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.palette.header.main};
  border-bottom: 1px solid ${({ theme }) => theme.palette.header.border};
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 2;
  button {
    color: ${({ theme }) => theme.palette.white.main};
  }
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  margin: 0 auto;
`;

export const ThemeButton = styled(Button)`
  img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
`;
