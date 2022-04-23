<script lang="ts" setup>
import { PhSignOut } from 'phosphor-vue';
</script>

<template>
  <div class="navbar bg-neutral rounded-xl mt-4 shadow-md">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">
        Nuxt3 + Supabase Demo
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-square" @click="$emit('logout')">
        <PhSignOut :size="18" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
