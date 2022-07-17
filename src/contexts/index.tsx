// React
import React from 'react';
// Types
import {Theme, InitialStateType} from '@types';
// Constants
import {INITIAL_STATE} from '@constants';
// Reducers
import {Actions, loadingReducer, pageReducer, settingsReducer, themeReducer, Types, userReducer} from './reducers';

const Context = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Actions>;
  theme: Theme;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
  theme: INITIAL_STATE.app.theme[INITIAL_STATE.app.theme.current],
});

const mainReducer = ({user, settings, app: {loading, page, theme}}:
  InitialStateType, action: Actions) => ({
  user: userReducer(user, action),
  settings: settingsReducer(settings, action),
  app: {
    loading: loadingReducer(loading, action),
    page: pageReducer(page, action),
    theme: themeReducer(theme, action),
  },
});

const AppContext = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(mainReducer, INITIAL_STATE);
  console.log(state);
  const theme = state.app.theme[state.app.theme.current];
  return (
    <Context.Provider value={{state, dispatch, theme}}>
      {children}
    </Context.Provider>
  );
};

export {AppContext, Context, Types};
