import { Link } from 'react-router-dom';
import { logoMBDark, logoMBLight } from '@/assets';
import { CONFIG, SupportedPages } from '@/constants';
import { FAIcon, Text } from '@/components';
import {
  ButtonsContainer,
  HeaderStyled,
  Logo,
  ThemeButton,
} from './Header.styled';
import { Toolbar, Container, Button } from '@mui/material';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from 'usehooks-ts';

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  const { toggle, isDarkMode } = useDarkMode();
  const { menu } = CONFIG;
  const logo = isDarkMode ? logoMBDark : logoMBLight;

  return (
    <HeaderStyled>
      <Container>
        <Toolbar>
          <Link to={SupportedPages.Home}>
            <Logo src={logo} />
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
          <ThemeButton onClick={() => toggle()}>
            <FAIcon icon={faLightbulb} />
          </ThemeButton>
        </Toolbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
