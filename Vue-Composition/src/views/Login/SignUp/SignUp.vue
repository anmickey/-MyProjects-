<script lang="ts" setup>
  import { required, email, helpers, sameAs, maxLength } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { computed, reactive } from 'vue';
  import { validatePass, BodyLogin, submitHandler, validHandler, checkEmail } from '../components';
  import { useUser, Input } from '@/components';
  import { UserConf } from '@/store/modules/user/user.conf';
  import { links } from '@/router/links';

  const state = reactive({
    firstName: '',
    number: '',
    login: '',
    email: '',
    password: '',
    confirmassword: '',
  });
  const { register, isLoading } = useUser();
  const rules = {
    firstName: { required },
    number: { required, maxLength: maxLength(10) },
    login: { required },
    email: {
      required,
      email,
      validemail: helpers.withMessage('Invalid email address', checkEmail),
    },
    password: {
      required,
      validpass: helpers.withMessage(
        'Minimum eight characters, minimum one capital letter and one number',
        validatePass,
      ),
    },
    confirmassword: {
      required,
      sameAsPass: () => {
        return sameAs(computed(() => state.password));
      },
    },
  };

  const v$ = useVuelidate(rules, state);
</script>

<template>
  <BodyLogin
    forForm="up"
    text="Already have an account? "
    :path="links.LOGIN_ROUTER"
    namePath="Sign in"
    :load="isLoading"
    ><form
      class="form-col"
      id="up"
      @submit.prevent="submitHandler<UserConf>({ landing: isLoading, body: state, v$, handler: register })"
    >
      <Input
        name="firstName"
        lable-text="First Name*"
        placeholder="First Name"
        v-model:input="state.firstName"
        :valid="validHandler(v$.firstName)"
      ></Input>
      <Input
        name="login"
        lable-text="Login*"
        placeholder="Login"
        v-model:input="state.login"
        :valid="validHandler(v$.login)"
      ></Input>
      <Input
        name="email"
        type="email"
        lable-text="Email*"
        placeholder="Email"
        v-model:input="state.email"
        :valid="validHandler(v$.email)"
      ></Input>
      <Input
        name="number"
        lable-text="Phone number*"
        placeholder="Number"
        v-model:input="state.number"
        :valid="validHandler(v$.number)"
      ></Input>
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
