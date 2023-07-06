// React
import { useContext } from 'react';
// Hooks
import { GlobalContext } from '@/contexts';
import { SupportedThemes } from '@/constants';

/**
 * Hook that facility global contexts calls.
 *
 * @return useGlobalContextResponse
 */
const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { loading, theme } = state;

  const setLoading = (payload: boolean) => {
    dispatch({ type: 'SET_LOADING', payload });
  };

  const setTheme = (payload: SupportedThemes) => {
    dispatch({ type: 'SET_THEME', payload });
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return { loading, theme, setLoading, setTheme, toggleTheme };
};

export default useGlobalContext;
