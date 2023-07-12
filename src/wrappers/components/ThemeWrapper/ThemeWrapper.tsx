// Constants
import { CONFIG } from '@/constants';
// Hooks
import { useGlobalContext } from '@/hooks';
// Libreries
import { ThemeProvider as ThemeStyledComponents } from 'styled-components';
import { createTheme, ThemeProvider as ThemeMaterial } from '@mui/material';

// Component props
interface ThemeWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render high order component theme with their logic.
 *
 * @return React.ReactElement <ThemeWrapper/>
 */
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme } = useGlobalContext();
  return (
    <ThemeStyledComponents theme={CONFIG.theme[theme]}>
      <ThemeMaterial theme={createTheme(CONFIG.theme[theme])}>
        {children}
      </ThemeMaterial>
    </ThemeStyledComponents>
  );
};

export default ThemeWrapper;
