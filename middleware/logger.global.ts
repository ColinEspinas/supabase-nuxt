export default defineNuxtRouteMiddleware((to, from) => {
  if (process.env.NODE_ENV === 'development') {
    console.log({
      from: from.fullPath,
      to: to.fullPath
    });
  }
});
