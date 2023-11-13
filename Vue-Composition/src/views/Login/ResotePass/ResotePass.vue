<script lang="ts" setup>
  import { required, sameAs, helpers } from '@vuelidate/validators';
  import { reactive } from 'vue';
  import { BodyLogin, submitHandler, validHandler, validatePass } from '../components';
  import { useUser, Input } from '@/components';
  import useVuelidate from '@vuelidate/core';
  import { UserConf } from '@/store/modules/user/user.conf';
  import { links } from '@/router/links';

  const { changePass, isLoading } = useUser();

  const state = reactive({
    password: '',
    confirmassword: '',
  });

  const rules = {
    password: {
      required,
      validpass: helpers.withMessage(
        'Minimum eight characters, minimum one capital letter and one number',
        validatePass,
      ),
    },
    confirmassword: {
      required,
      sameAsPass: sameAs(state.password),
    },
  };

  const v$ = useVuelidate(rules, state);
</script>

<template>
  <BodyLogin
    text="Don't have an account yet? "
    :path="links.CONFIRM_EMAIL_ROUTER"
    namePath="Register"
    forForm="changepass"
    :load="isLoading"
    ><form
      class="form-col"
      id="changepass"
      @submit.prevent="submitHandler<UserConf>({ landing: isLoading, body: state, v$, handler: changePass })"
    >
      <Input
        placeholder="Password"
        name="password"
        type="password"
        lable-text="Password*"
        v-model:input.number="state.password"
        :valid="validHandler(v$.password)"
        :defaultmess="v$.password.validpass.$message"
      ></Input>
      <Input
        placeholder="Repeat password"
        name="confirmpassword"
        type="password"
        lable-text="Repeat password*"
        v-model:input="state.confirmassword"
        :valid="validHandler(v$.confirmassword)"
      ></Input>
    </form>
  </BodyLogin>
</template>
