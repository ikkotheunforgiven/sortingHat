// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        title: 'Sorting Hat',
        link: [{ rel: 'icon', type: 'image/png', href: '/img/hogwarts.png' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Life+Savers&display=swap'}]
      },
      pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
