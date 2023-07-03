// Styled components
import { HeaderStyled } from './Header.styled';
// Libreries
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

/**
 * Functional component that render component Header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  return (
    <HeaderStyled data-testid='header'>
      <AppBar position='static' color='primary'>
        <Container>
          <Toolbar>
            icon
            <Typography variant='h6'>LOGO</Typography>
            <Button>Page</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderStyled>
  );
};

export default Header;
