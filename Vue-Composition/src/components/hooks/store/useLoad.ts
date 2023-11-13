import { computed } from 'vue';
import { useStore } from 'vuex';

export function useLoad() {
  const store = useStore();

  return {
    CHANGE_LOAD: (stateLoad: boolean) => store.commit('load/CHANGE_LOAD', stateLoad),
    CHANGE_ACTION: (stateLoad: boolean) => store.commit('load/CHANGE_ACTION', stateLoad),
    isLoading: computed(() => store.state.load.isLoading),
    onceExecute: computed(() => store.state.load.onceExecute),
  };
}
