import withAmpt from "@ampt/nuxt";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  withAmpt({
    modules: ["nuxt-icon"],
    devtools: { enabled: true },
  })
);
