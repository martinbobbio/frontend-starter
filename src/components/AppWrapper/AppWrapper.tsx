// Components
import { Footer, Header } from '..';
import { SEOWrapper, FetchWrapper, ThemeWrapper } from './components';
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
      <SEOWrapper>
        <ThemeWrapper>
          <FetchWrapper>
            <Header />
            {children}
            <Footer />
          </FetchWrapper>
        </ThemeWrapper>
      </SEOWrapper>
    </AppWrapperStyled>
  );
};

export default AppWrapper;
