<script setup lang="ts">
  import AppLayout from './layouts/AppLayout.vue';
  import { onMounted } from 'vue';
  import { RouterView } from 'vue-router';
  import { useUser, Progressbar, actionToast, ToastTypes } from './components';

  const { check } = useUser();

  onMounted(() => {
    check();
    //  localStorage.setItem('tokencrm', JSON.stringify('123'));
    actionToast('The project is under development', ToastTypes.info);
  });
</script>

<template>
  <Progressbar />
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
<style lang="scss">
  @import '@/assets/layouts/_container.scss';
  @import '@/assets/layouts/_colors.scss';
  @import '@/assets/layouts/_bg.scss';
  @import '@/assets/layouts/_grid.scss';
  @import '@/assets/crm.scss';
  @import '@/assets/components/_position.scss';
  @import '@/assets/components/_dd.scss';
</style>
