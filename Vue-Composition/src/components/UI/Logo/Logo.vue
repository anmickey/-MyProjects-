<script lang="ts" setup>
  import { links } from '@/router/links';
</script>

<template>
  <div class="logo">
    <RouterLink :to="links.HOME_ROUTER" class="logo__text c__w">TechnicalBox<sup>&copy;</sup></RouterLink>
  </div>
</template>

<style lang="scss">
  @import './logo.scss';
</style>
