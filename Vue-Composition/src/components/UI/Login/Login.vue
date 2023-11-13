<script setup lang="ts">
  import { links } from '@/router/links';
</script>

<template>
  <div class="left">
    <RouterLink :to="links.HOME_ROUTER" class="login"
      >Swap <span class="big orange-text text-lighten-2">World</span><br />
      <span class="mini">Platform</span>
    </RouterLink>
  </div>
</template>

<style lang="scss">
  @import './login.scss';
</style>
