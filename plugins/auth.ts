export default defineNuxtPlugin(() => {
  const user = useSupabaseUser();
  watchEffect(() => {
    if (user.value) {
      const route = useRoute();
      if (route.query.redirect) {
        navigateTo({ path: route.query.redirect as string });
      }
    }
  });
});
