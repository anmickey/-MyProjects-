<script lang="ts" setup>
  import { required } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { reactive } from 'vue';
  import { validHandler, BodyLogin, submitHandler } from '../components';
  import { useUser, Input } from '@/components';
  import { UserConf } from '@/store/modules/user/user.conf';
  import { links } from '@/router/links';

  const { login, isLoading } = useUser();

  const state = reactive({
    email: '',
    password: '',
  });

  const rules = {
    email: { required },
    password: { required },
  };

  const v$ = useVuelidate(rules, state);
</script>

<template>
  <BodyLogin
    text="Don't have an account yet?"
    :path="links.REGISTRATION_ROUTER"
    namePath="Register"
    forForm="in"
    :load="isLoading"
  >
    <form id="in" @submit.prevent="submitHandler<UserConf>({ landing: isLoading, body: state, v$, handler: login })">
      <Input
        name="email"
        lable-text="Login / Email"
        placeholder="Login / Email"
        v-model:input="state.email"
        :valid="validHandler(v$.email)"
      ></Input>
      <Input
        placeholder="Password"
        name="password"
        type="password"
        lable-text="Password"
        v-model:input="state.password"
        :valid="validHandler(v$.password, 'password')"
      ></Input>
    </form>
  </BodyLogin>
</template>
