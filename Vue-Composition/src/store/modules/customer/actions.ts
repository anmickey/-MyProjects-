import { $authHost, $host } from '@/http';
import { ToastTypes, actionToast } from '@/components';
import { UserConf } from './user.conf.js';
import router from '@/router/';
import { links } from '@/router/links';
import { ResponseConf } from '../actionStore.conf.js';

export default {
  async login({ commit }: any, body: UserConf) {
    try {
      commit('LOADING_USER', true);

      const data: ResponseConf<UserConf> = await $host
        .post('user/login', {
          json: body,
        })
        .json();

      if (data.message == 'Ok') {
        commit('ADD_USER', {
          data,
          pass: true,
        });
      } else actionToast(data.message, ToastTypes.error);
    } catch (error) {
      if (error instanceof Error) actionToast(error.message, ToastTypes.error);
    } finally {
      commit('LOADING_USER', {
        load: false,
      });
    }
  },
  async register({ commit }: any, body: UserConf) {
    try {
      commit('LOADING_USER', true);
      const data: ResponseConf<UserConf> = await $host
        .post('user/add', {
          json: body,
        })
        .json();

      if (data.message == 'Ok') {
        commit('ADD_USER', {
          data,
          pass: true,
        });
      } else actionToast(data.message, ToastTypes.error);
    } catch (error) {
      if (error instanceof Error) actionToast(error.message, ToastTypes.error);
    } finally {
      commit('LOADING_USER', {
        load: false,
      });
    }
  },

  async check({ commit }: any) {
    try {
      const data: ResponseConf<UserConf> = await $authHost.get('user/check').json();

      if (data.message == 'Ok') {
        commit('ADD_USER', { data });
      } else {
        actionToast(data.message, ToastTypes.error);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  },

  async checkemail({ commit }: any, body: UserConf) {
    try {
      commit('LOADING_USER', true);
      const data: ResponseConf = await $host
        .post('user/checkemail', {
          json: body,
        })
        .json();

      if (data.message == 'Ok') {
        router.push(links.CONFIRM_EMAIL_ROUTER);
      } else actionToast(data.message, ToastTypes.error);
    } catch (error) {
      if (error instanceof Error) actionToast(error.message, ToastTypes.error);
    } finally {
      commit('LOADING_USER', {
        load: false,
      });
    }
  },

  async changepass({ commit }: any, body: UserConf) {
    try {
      commit('LOADING_USER', true);
      const data: ResponseConf<UserConf> = await $host
        .post('user/changepass', {
          json: body,
        })
        .json();

      if (data.message == 'Ok') {
        router.push(links.HOME_ROUTER);
        actionToast('Password changed', ToastTypes.seccess);
      } else actionToast(data.message, ToastTypes.error);
    } catch (error) {
      if (error instanceof Error) actionToast(error.message, ToastTypes.error);
    } finally {
      commit('LOADING_USER', {
        load: false,
      });
    }
  },
};
