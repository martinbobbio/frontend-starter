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
import { FAIcon, Text } from '..';

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  const { theme, toggleTheme } = useGlobalContext();
  const { menu, branding } = CONFIG;

  return (
    <HeaderStyled data-testid='header'>
      <Container>
        <Toolbar>
          <Link to={SupportedPages.Home}>
            <Logo src={branding.logo[theme]} />
          </Link>
          <ButtonsContainer>
            {menu.map((item, i) => (
              <Button key={i}>
                <Link to={item.redirect}>
                  <Text size='sm' fontWeight='medium'>
                    {item.value}
                  </Text>
                </Link>
              </Button>
            ))}
          </ButtonsContainer>
          <ThemeButton onClick={() => toggleTheme()}>
            <FAIcon icon={faLightbulb} />
          </ThemeButton>
        </Toolbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
