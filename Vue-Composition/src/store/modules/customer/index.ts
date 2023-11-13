import { UserConf } from './user.conf';
import { PropType } from 'vue';
import actions from './actions';
import mutations from './mutations';

export default {
  namespaced: true,
  state: () => ({
    body: Object as PropType<UserConf>,
    isAuth: false,
    isLoading: false,
  }),
  actions,
  mutations,
};
