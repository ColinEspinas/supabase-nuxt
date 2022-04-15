<script lang="ts" setup>
import { useAuthStore } from '~~/stores/auth';
import Navigation from '~~/components/navigation.vue';
  definePageMeta({
    middleware: ['auth']
  });

  await useAuth();
  const auth = useAuthStore();
  const router = useRouter();

  const logout = async () => {
    await auth.signOut();
    router.push('/login');
  }
</script>

<template>
  <NuxtLayout>
    <Navigation @logout="logout" />
    <div class="flex flex-col mt-10">
      <p>Your are connected as {{ auth.profile?.first_name }} {{ auth.profile?.last_name }} ({{ auth.user?.email }})</p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
