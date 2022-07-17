// Constants
import {INITIAL_STATE} from '@constants';
// Types
import {PageStruct} from '@types';
// Reducer
import {ActionMap, Types, Actions} from '..';

type PagePayload = {
    [Types.SetPage]: PageStruct
    [Types.ResetPage]: object
}

export type PageActions = ActionMap<PagePayload>[keyof ActionMap<PagePayload>]

export const pageReducer = (state: PageStruct, action: Actions) => {
  switch (action.type) {
    case Types.SetPage:
      return {...action.payload};
    case Types.ResetPage:
      return INITIAL_STATE.app.page;
    default:
      return state;
  }
};
