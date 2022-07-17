// Constants
import {INITIAL_STATE} from '@constants';
// Types
import {LoadingStruct} from '@types';
// Reducers
import {ActionMap, Types, Actions} from '..';

type LoadingPayload = {
    [Types.SetLoading]: LoadingStruct
    [Types.ResetLoading]: object
}

export type LoadingActions = ActionMap<LoadingPayload>[keyof ActionMap<LoadingPayload>]

export const loadingReducer = (state: LoadingStruct, action: Actions) => {
  switch (action.type) {
    case Types.SetLoading:
      return {...action.payload};
    case Types.ResetLoading:
      return INITIAL_STATE.app.loading;
    default:
      return state;
  }
};
