export default {
  namespaced: true,
  state: {
    isLoading: false,
    onceExecute: true,
  },
  mutations: {
    CHANGE_LOAD(state: any, load: boolean) {
      state.isLoading = load;
    },
    CHANGE_ACTION(state: any, load: boolean) {
      state.onceExecute = load;
    },
  },
};
