export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo({ name: 'login', query: { redirect: to.path } });
  }
});