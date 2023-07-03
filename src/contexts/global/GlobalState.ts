// Constants
import { SupportedThemes } from '@/constants';

export interface GlobalState {
  theme: SupportedThemes;
  loading: boolean;
}

export type Action =
  | { type: 'SET_THEME'; payload: SupportedThemes }
  | { type: 'SET_LOADING'; payload: boolean };

export const initialState: GlobalState = {
  theme: SupportedThemes.Light,
  loading: false,
};
