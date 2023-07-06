// React
import { Reducer } from 'react';
// States
import { Action, GlobalState } from './GlobalState';
// Constants
import { SupportedThemes } from '@/constants';

export const globalReducer: Reducer<GlobalState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme:
          state.theme === SupportedThemes.Light
            ? SupportedThemes.Dark
            : SupportedThemes.Light,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
