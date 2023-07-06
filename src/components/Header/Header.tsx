// React
import { Link } from 'react-router-dom';
// Hooks
import { useGlobalContext } from '@/hooks';
// Constants
import { CONFIG, SupportedPages } from '@/constants';
// Styled components
import {
  ButtonsContainer,
  HeaderStyled,
  Logo,
  ThemeButton,
} from './Header.styled';
// Libreries
import { Toolbar, Container, Button } from '@mui/material';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Icon, Text } from '..';

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <HeaderStyled data-testid='header'>
      <Container>
        <Toolbar>
          <Link to={SupportedPages.Home}>
            <Logo src={CONFIG.branding.logo[theme]} />
          </Link>
          <ButtonsContainer>
            <Button>
              <Link to={SupportedPages.Home}>
                <Text>Home</Text>
              </Link>
            </Button>
          </ButtonsContainer>
          <ThemeButton onClick={() => toggleTheme()}>
            <Icon icon={faLightbulb} />
          </ThemeButton>
        </Toolbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
