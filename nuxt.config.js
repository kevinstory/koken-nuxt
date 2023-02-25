export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt",'@nuxt/image-edge'],
  app: {
    head: {
      title: "Koken Nuxt",
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
          rel: "stylesheet",
        },
      ],
    },
  },
  image: {

  },
  plugins: [
    
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
