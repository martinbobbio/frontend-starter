// Assets
import { brandingReact, brandingVite } from '@/assets';
// Styled components
import { HeaderStyled } from './Header.styled';

/**
 * Functional component that render component Header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  return (
    <HeaderStyled data-testid='header'>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={brandingVite} className='logo' alt='Vite logo' />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={brandingReact} className='logo react' alt='React logo' />
      </a>
    </HeaderStyled>
  );
};

export default Header;
