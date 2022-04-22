<script lang="ts" setup>
import { useAuthStore } from '~~/stores/auth';
import Navigation from '~~/components/navigation.vue';
  definePageMeta({
    middleware: ['auth']
  });

  const user = useSupabaseUser();
  const { signOut } = useAuth();

  const { data: profile } = await useAsyncData('profile', async () => {
    const { getUserProfile } = useAuthStore();
    return await getUserProfile();
  });

  const logout = async () => {
    await signOut('login');
  }
</script>

<template>
  <NuxtLayout>
    <Navigation @logout="logout" />
    <div v-if="profile" class="flex flex-col mt-10">
      <p>Your are connected as {{ profile.first_name }}({{ user?.email }})</p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
