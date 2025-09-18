<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Hola,  soy  <span class="text-blue-400">{{ name }}</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">{{ description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#skills" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Habilidades
          </a>
          <a href="#projects" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Proyectos
          </a>
         
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="py-20 px-6 bg-gray-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8 text-blue-400">Sobre mí</h2>
        <div class="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
          {{aboutMe}}
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-400 mb-2">{{ experience }}</div>
            <p class="text-gray-300">Años de experiencia</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-400 mb-2">{{ projects }}</div>
            <p class="text-gray-300">Proyectos completados</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Projects Section -->
    <ProjectsSection />
  
      <!-- Contact Section -->
      <section id="contact" class="py-20 px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16 text-blue-400">Contacto</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold mb-6 text-gray-100">Información de Contacto</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <span class="text-blue-400 mr-4">✉️</span>
                  <a :href="`mailto:${email}`" class="text-gray-300 hover:text-blue-400">{{ email }}</a>
                </div>
                <div class="flex items-center">
                  <span class="text-blue-400 mr-4">📱</span>
                  <span class="text-gray-300">{{ phone }}</span>
                </div>
                <div class="flex items-center">
                  <span class="text-blue-400 mr-4">📍</span>
                  <span class="text-gray-300">{{ location }}</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 py-8 px-6 border-t border-gray-700">
        <div class="max-w-6xl mx-auto text-center">
          <p class="text-gray-400">© {{ new Date().getFullYear() }} {{ name }}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
<script setup>

const { name, fullName, description, email, phone, location, experience, projects, aboutMe } = useRuntimeConfig().public


  
  
  // Scroll suave
  onMounted(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  })
  </script>
  
  <style scoped>
  /* Animaciones personalizadas */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  </style>