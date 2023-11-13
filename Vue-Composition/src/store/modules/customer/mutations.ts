import { UserMutation } from './user.conf';
import { ToastTypes, actionToast } from '@/components';
import router from '@/router/';
import { links } from '@/router/links';

export default {
  ADD_USER(state: any, { data, pass }: UserMutation) {
    state.body = data.body;
    state.isAuth = true;
    localStorage.setItem('tokencrm', JSON.stringify(data.token || '123'));

    if (pass) {
      router.push(links.HOME_ROUTER);
    }

    setTimeout(() => actionToast(`Welcome ${data.body.firstName}`, ToastTypes.seccess), 500);
  },
  EXIT_USER(state: any) {
    state.body = {};
    state.isAuth = false;
    localStorage.setItem('tokencrm', JSON.stringify({}));
    router.push(links.HOME_ROUTER);
  },

  LOADING_USER(state: any, load: boolean) {
    state.isLoading = load;
  },
};
