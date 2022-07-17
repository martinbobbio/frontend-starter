// Constants
import {INITIAL_STATE} from '@constants';
// Types
import {UserStruct} from '@types';
// Reducer
import {ActionMap, Types, Actions} from '..';

type UserPayload = {
    [Types.SetUser]: UserStruct
    [Types.ResetUser]: object
}

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>]

export const userReducer = (state: UserStruct, action: Actions) => {
  switch (action.type) {
    case Types.SetUser:
      return {...action.payload};
    case Types.ResetUser:
      return INITIAL_STATE.user;
    default:
      return state;
  }
};
