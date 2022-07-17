import {user} from './user/user';
import {settings} from './settings/settings';
import {loading} from './loading/loading';
import {page} from './page/page';
import {theme} from './theme/theme';

const state = {
  user,
  settings,
  app: {
    theme,
    loading,
    page,
  },
};

export default state;
