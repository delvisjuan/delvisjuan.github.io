<template>
  <section id="projects" class="py-20 px-6 bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 text-blue-400">Proyectos Destacados</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="project.title"
          :project="project"
          :animated="true"
          :style="`animation-delay: ${index * 0.1}s`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    title: 'Anotador de Imágenes Satelitales',
    description: 'Aplicación web para la anotación en imágenes satelitales multiespectrales, permitiendo el etiquetado y clasificación de datos geoespaciales.',
    technologies: ['Python', 'FastAPI', 'Nuxt.js']
  },
  {
    title: 'Sistema de Gestión de Contratos',
    description: 'Plataforma integral para la gestión y seguimiento de contratos, con notificaciones y reportes personalizados.',
    technologies: ['Node.js', 'Express', 'Sequelize', 'React', 'React Native']
  },
  {
    title: 'Plataforma de Lectura',
    description: 'Sistema web para lectura y publicación de libros digitales con funcionalidades de seguimiento de lectura y comunidad de lectores.',
    technologies: ['Node.js', 'Express', 'Sequelize', 'Nuxt.js', 'PostgreSQL']
  }
])
</script>
