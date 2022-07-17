// Constants
import {INITIAL_STATE} from '@constants';
// Types
import {ThemeStruct} from '@types';
// Reducer
import {ActionMap, Types, Actions} from '..';

type ThemePayload = {
    [Types.SetTheme]: ThemeStruct
    [Types.ResetTheme]: object
}

export type ThemeActions = ActionMap<ThemePayload>[keyof ActionMap<ThemePayload>]

export const themeReducer = (state: ThemeStruct, action: Actions) => {
  switch (action.type) {
    case Types.SetTheme:
      return {...action.payload};
    case Types.ResetTheme:
      return INITIAL_STATE.app.theme;
    default:
      return state;
  }
};
