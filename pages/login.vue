<script lang="ts" setup>
import { PhFacebookLogo, PhGoogleLogo } from 'phosphor-vue';

definePageMeta({
  middleware: 'guest'
});

const { signIn, signUp } = useAuth();

const email = ref('');
const password = ref('');

const login = () => {
  signIn(email.value, password.value, '/');
};

const register = () => {
  signUp(email.value, password.value, '/');
};
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center mt-10">
      <div class="w-full max-w-xs">
        <div>
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input v-model="email" type="text" placeholder="Enter your email" class="input input-bordered w-full">
        </div>
        <div>
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input v-model="password" type="password" placeholder="Enter your password" class="input input-bordered w-full">
          <label class="label">
            <span class="label-text-alt">6 character min.</span>
            <a class="label-text-alt link link-primary">Forgot password</a>
          </label>
        </div>
        <NuxtLink class="btn btn-primary w-full normal-case mt-4" @click="login">
          Sign in
        </NuxtLink>
        <NuxtLink class="btn btn-primary w-full normal-case mt-4" @click="register">
          Sign up
        </NuxtLink>
      </div>
      <div class="mx-auto w-full max-w-xs divider">
        OR
      </div>
      <div class="flex flex-col w-full max-w-xs gap-4">
        <NuxtLink class="btn btn-disabled gap-2 w-full normal-case">
          <PhFacebookLogo :size="24" weight="bold" />
          Sign in with Facebook
        </NuxtLink>
        <NuxtLink class="btn btn-disabled gap-2 w-full normal-case">
          <PhGoogleLogo :size="24" weight="bold" />
          Sign in with Google
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
