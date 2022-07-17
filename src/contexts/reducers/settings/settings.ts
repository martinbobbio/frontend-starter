// Constants
import {INITIAL_STATE} from '@constants';
// Types
import {SettingsStruct} from '@types';
// Reducer
import {ActionMap, Types, Actions} from '..';

type SettingsPayload = {
    [Types.SetSettings]: SettingsStruct
    [Types.ResetSettings]: object
}

export type SettingsActions = ActionMap<SettingsPayload>[keyof ActionMap<SettingsPayload>]

export const settingsReducer = (state: SettingsStruct, action: Actions) => {
  switch (action.type) {
    case Types.SetSettings:
      return {...action.payload};
    case Types.ResetSettings:
      return INITIAL_STATE.settings;
    default:
      return state;
  }
};
