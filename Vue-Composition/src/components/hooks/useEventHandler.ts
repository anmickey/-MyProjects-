import { onBeforeMount, onMounted } from 'vue';

export function useEventHandler(type: string, methods: (arg?: any) => void) {
  onMounted(() => {
    window.addEventListener(type, methods);
  });
  onBeforeMount(() => {
    window.removeEventListener(type, methods);
  });
}
