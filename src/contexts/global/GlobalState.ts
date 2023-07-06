// Constants
import { SupportedThemes } from '@/constants';

export interface GlobalState {
  theme: SupportedThemes;
  loading: boolean;
}

export type Action =
  | { type: 'SET_THEME'; payload: SupportedThemes }
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_LOADING'; payload: boolean };

export const initialGlobalState: GlobalState = {
  theme: SupportedThemes.Light,
  loading: false,
};
