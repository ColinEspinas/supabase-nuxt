<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
});

const user = useSupabaseUser();
const { signOut } = useAuth();
const profile = useUserProfile();

const logout = async () => {
  await signOut('login');
};
</script>

<template>
  <NuxtLayout>
    <AppNavigation @logout="logout" />
    <div class="flex flex-col mt-10">
      <p>Your are connected as {{ profile?.first_name }} {{ profile?.last_name }} ({{ user?.email }})</p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
