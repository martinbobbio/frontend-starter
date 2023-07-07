// Components
import { Disclaimer, Footer, Header } from '..';
import { ThemeWrapper } from './components';
// Styled components
import { AppWrapperStyled } from './AppWrapper.styled';

// Component props
interface AppWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render component app wrapper with their logic.
 *
 * @return React.ReactElement <AppWrapper/>
 */
const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <AppWrapperStyled data-testid='AppWrapper'>
      <ThemeWrapper>
        <Header />
        <Disclaimer />
        {children}
        <Footer />
      </ThemeWrapper>
    </AppWrapperStyled>
  );
};

export default AppWrapper;
