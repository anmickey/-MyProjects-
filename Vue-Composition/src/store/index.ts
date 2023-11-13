import { createStore } from 'vuex';
import customer from './modules/customer/index';
import load from './modules/loading/index';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    customer,
    load,
  },
});
