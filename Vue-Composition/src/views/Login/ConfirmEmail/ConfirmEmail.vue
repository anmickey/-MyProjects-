<script lang="ts" setup>
  import { required, email } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { reactive } from 'vue';
  import { BodyLogin, submitHandler, validHandler } from '../components';
  import { useUser, Input } from '@/components';
  import { UserConf } from '@/store/modules/user/user.conf';
  import { links } from '@/router/links';

  const { checkemail, isLoading } = useUser();

  const state = reactive({
    email: '',
  });

  const rules = {
    email: { required, email },
  };

  const v$ = useVuelidate(rules, state);
</script>

<template>
  <BodyLogin
    text="Don't have an account yet? "
    :path="links.REGISTRATION_ROUTER"
    namePath="Register"
    forForm="check"
    :load="isLoading"
    ><form
      id="check"
      @submit.prevent="submitHandler<UserConf>({ landing: isLoading, body: state, v$, handler: checkemail })"
    >
      <Input
        name="email"
        type="email"
        lable-text="Email"
        placeholder="Email*"
        v-model:input="state.email"
        :valid="validHandler(v$.email)"
      ></Input>
    </form>
  </BodyLogin>
</template>
