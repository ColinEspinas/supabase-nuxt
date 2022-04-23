<script lang="ts" setup>
import Navigation from '~~/components/navigation.vue';

  definePageMeta({
    middleware: ['auth']
  });

  const user = useSupabaseUser();
  const { signOut } = useAuth();
  const profile = useUserProfile();

  const logout = async () => {
    await signOut('login');
  }
</script>

<template>
  <NuxtLayout>
    <Navigation @logout="logout" />
    <div class="flex flex-col mt-10">
      <p>Your are connected as {{ profile?.first_name }}({{ user?.email }})</p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
