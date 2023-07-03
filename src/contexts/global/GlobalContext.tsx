// React
import { createContext, Dispatch, useReducer } from 'react';
// State
import { Action, GlobalState, initialState } from './GlobalState';
import { globalReducer } from './GlobalReducer';

interface GlobalContextType {
  state: GlobalState;
  dispatch: Dispatch<Action>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const contextValue: GlobalContextType = {
    state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
