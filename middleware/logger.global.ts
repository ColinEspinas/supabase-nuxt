
import { config, env } from "process";
import nuxtConfig from "~~/nuxt.config";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.env.NODE_ENV === 'development') {
    console.log({
      from: from.fullPath,
      to: to.fullPath
    });
  }
});
