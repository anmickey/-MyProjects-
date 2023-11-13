<script setup lang="ts">
  import { H, P } from '@/components/index';
</script>

<template>
  <div class="login white">
    <header class="login__header bg__b_gr">
      <div class="container">
        <div class="login__goback" :style="{ display: 'inline-block' }">
          <RouterLink to="/">
            <P size="l" class="c__w_d">
              <i class="material-icons">chevron_left</i>
              Go back
            </P>
          </RouterLink>
        </div>

        <div class="login__title">
          <H size="h2" class="c__w">TechnicalBox </H>
        </div>
      </div>
    </header>

    <main class="login__container container">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
  @import './Login/login.scss';
</style>
