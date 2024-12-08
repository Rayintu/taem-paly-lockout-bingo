// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-socket-io",
    "@vueuse/nuxt",
  ],
  io: {
    // module options
    sockets: [
      {
        name: "main",
        url: "http://localhost:3000",
      },
    ],
  },
});