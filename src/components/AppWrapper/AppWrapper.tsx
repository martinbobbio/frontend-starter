// Styled components
import { AppWrapperStyled } from './AppWrapper.styled';
import { ThemeWrapper } from './components';

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
      <ThemeWrapper>{children}</ThemeWrapper>
    </AppWrapperStyled>
  );
};

export default AppWrapper;
