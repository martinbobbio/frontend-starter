/* eslint-disable no-unused-vars */
import {LoadingActions} from './app/loading';
import {PageActions} from './app/page';
import {ThemeActions} from './app/theme';
import {SettingsActions} from './settings/settings';
import {UserActions} from './user/user';

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key
          }
        : {
              type: Key
              payload: M[Key]
          }
}

export enum Types {
  SetLoading = 'SET_LOADING',
  ResetLoading = 'RESET_LOADING',
  SetUser = 'SET_USER',
  ResetUser = 'RESET_USER',
  SetPage = 'SET_PAGE',
  ResetPage = 'RESET_PAGE',
  SetTheme = 'SET_THEME',
  ResetTheme = 'RESET_THEME',
  SetSettings = 'SET_SETTINGS',
  ResetSettings = 'RESET_SETTINGS'
}

export type Actions = LoadingActions | PageActions | ThemeActions | UserActions | SettingsActions

export {loadingReducer} from './app/loading';
export {pageReducer} from './app/page';
export {themeReducer} from './app/theme';
export {userReducer} from './user/user';
export {settingsReducer} from './settings/settings';
