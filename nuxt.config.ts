// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      name: "Delvis Juan",
      fullName: "Delvis Juan Mesa Padilla",
      description: "Desarrollador Full Stack especializado en crear experiencias web modernas y funcionales",
      email: "delvisjuan2002@gmail.com",
      phone: "+5358795774",
      location: "Jatibonico, Sancti Spíritus, Cuba",
      experience: "4+",
      projects: "20+",
      aboutMe:"Como Ingeniero Informático, mi objetivo es construir soluciones de software de alto impacto. Me especializo en el desarrollo full stack para crear aplicaciones web y móviles que no solo sean robustas, sino también escalables y eficientes. Mi experiencia también incluye trabajar con IoT, lo que me permite diseñar sistemas que recolectan datos del mundo físico y los convierten en información valiosa. En esencia, me dedico a transformar conceptos en productos que resuelven problemas reales.",
      web3FormsAccessKey: "f75fc468-d47a-487d-9213-42bc67b7b5e8"
    }
  },
  image: {
    domains: ['cdn.jsdelivr.net']
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }
      ]
    }
  }
})