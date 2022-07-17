import {SettingsStruct, UserStruct, PageStruct, LoadingStruct, ThemeStruct} from '@types';

export type InitialStateType = {
  user: UserStruct;
  settings: SettingsStruct;
  app: {
    loading: LoadingStruct;
    page: PageStruct;
    theme: ThemeStruct;
  }
}
