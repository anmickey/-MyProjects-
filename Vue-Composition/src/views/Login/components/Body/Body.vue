<script setup lang="ts">
  import { H, Button, P } from '@/components/index';
  import { links } from '@/router/links';
  import { RouteNamesEnum } from '@/router/router.conf';
  import { defineProps } from 'vue';
  import { useRoute } from 'vue-router';

  const { login, confirmEmai, restore, signup } = RouteNamesEnum;

  const route = useRoute();

  defineProps({
    text: { type: String, required: true },
    path: { type: String, required: true },
    namePath: { type: String, required: true },
    forForm: { type: String, required: true },
    load: { type: Boolean, required: true },
  });

  function title() {
    if (route.name == login) {
      return { title: 'Sign in', btn: 'Sign in' };
    } else if (route.name == signup) {
      return { title: 'Create your free account', btn: 'Register' };
    } else if (route.name == restore) {
      return { title: 'Reset password', btn: 'Reset password' };
    } else if (route.name == confirmEmai) {
      return { title: 'Confirm Email', btn: 'Send' };
    } else {
      return { title: 'Login', btn: 'Send' };
    }
  }
</script>
<template>
  <div class="login__subtitle">
    <H class="c__g_dl" size="h3">{{ title().title }}</H>
  </div>
  <div class="login__body" :class="{ up: route.name == signup }">
    <slot />
    <div class="login__footer">
      <template v-if="route.name != signup">
        <div v-if="route.name != confirmEmai">
          <P size="m" :class="'c__g_dl'">
            <span>Lost your password? </span>
            <RouterLink :to="links.CONFIRM_EMAIL_ROUTER" class="login__link c__g_dl-l">Reset</RouterLink>
          </P>
        </div>
        <div v-else>
          <P size="m" class="login__link">
            <RouterLink :to="links.LOGIN_ROUTER" class="c__g_dl">
              <i class="material-icons">chevron_left</i>
              Sign in
            </RouterLink>
          </P>
        </div>
      </template>

      <div v-else>
        <P size="m" :class="'c__g_dl'">
          <span :class="'c__g_dl'">{{ text }}</span>
          <RouterLink :to="links.LOGIN_ROUTER" class="login__link c__g_dl-l">
            {{ namePath }}
          </RouterLink>
        </P>
      </div>

      <div class="login__btn">
        <Button
          class="blue bg__b_d-l c__w"
          :parameters="{ width: '8rem', height: '4.5rem' }"
          :load="load"
          :forForm="forForm"
          ><P size="l">{{ title().btn }}</P></Button
        >
      </div>
    </div>
  </div>

  <div class="login__below" v-if="!route.path.includes('restore') && !$route.path.includes('register')">
    <P another="login__footertext" size="m">
      <span :class="'c__g_dl'"> {{ text }}{{ ' ' }} </span>
      <RouterLink :to="path" :class="'login__link c__g_dl-l'">
        {{ namePath }}
      </RouterLink>
    </P>
  </div>
</template>
<style lang="scss">
  @import './body.scss';
</style>
