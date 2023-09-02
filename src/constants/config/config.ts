import { logoMBDark, logoMBLight } from '@/assets';
import { SupportedPages, THEME } from '@/constants';

const BRANDING = {
  logo: {
    light: logoMBLight,
    dark: logoMBDark,
  },
};
const MENU = [
  { value: 'Home', redirect: SupportedPages.Home },
  { value: 'Components', redirect: SupportedPages.Components },
  { value: 'FA Icons', redirect: SupportedPages.FAIcons },
  { value: 'Axios + SWR', redirect: SupportedPages.AxiosAndSWR },
];

const SITES = {
  react: 'https://legacy.reactjs.org/',
  vite: 'https://vitejs.dev/',
  githubVersion: 'https://github.com/martinbobbio/frontend-starter/tree/',
};

export default {
  branding: BRANDING,
  menu: MENU,
  sites: SITES,
  theme: THEME,
};
