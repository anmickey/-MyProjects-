import { computed } from 'vue';
import { useStore } from 'vuex';

export function useUser() {
  const store = useStore();

  return {
    register: (body: any) => store.dispatch('customer/register', body),
    login: (body: any) => store.dispatch('customer/login', body),
    changePass: (body: any) => store.dispatch('customer/changepass', body),
    checkemail: (body: any) => store.dispatch('customer/checkemail', body),
    check: () => store.dispatch('customer/check'),
    exit: () => store.commit('customer/LOADING_USER'),
    isAuth: computed(() => store.state.customer.isAuth),
    user: computed(() => store.state.customer.body),
    isLoading: computed(() => store.state.customer.isLoading),
  };
}
