<template>
  <section id="skills" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 text-blue-400">Habilidades Técnicas</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillsCard 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          :skill="skill"
          :animated="true"
          :style="`animation-delay: ${index * 0.1}s`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
 const skills = ref([
    // Frontend
    { 
      name: 'Nuxt.js',
      iconUrl: '/nuxtjs-original.svg',
      class: 'bg-white rounded-full p-1'
    },
    { 
      name: 'React',
      iconUrl: '/react-original.svg'
    },
    { 
      name: 'React Native',
      iconUrl: '/react-original.svg',
      class: 'text-blue-400'
    },
    { 
      name: 'Vue.js',
      iconUrl: '/vuejs-original.svg'
    },
    { 
      name: 'Tailwind CSS',
      iconUrl: '/tailwindcss-original.svg'
    },
    { 
      name: 'Material UI',
      iconUrl: '/materialui-original.svg'
    },
    { 
      name: 'HTML5',
      iconUrl: '/html5-original.svg'
    },
    { 
      name: 'CSS3',
      iconUrl: '/css3-original.svg'
    },
    { 
      name: 'JavaScript',
      iconUrl: '/javascript-original.svg'
    },
    { 
      name: 'TypeScript',
      iconUrl: '/typescript-original.svg'
    },
    
    // Backend
    { 
      name: 'Node.js',
      iconUrl: '/nodejs-original.svg'
    },
    { 
      name: 'Express',
      iconUrl: '/express-original.svg',
      class: 'bg-white rounded p-1'
    },
    { 
      name: 'Python',
      iconUrl: '/python-original.svg'
    },
    { 
      name: 'FastAPI',
      iconUrl: '/fastapi-original.svg',
      class: 'rounded p-1'
    },
    { 
      name: 'Django',
      iconUrl: '/django-plain.svg',
      class: 'bg-white rounded-full p-1'
    },
    { 
      name: 'Java',
      iconUrl: '/java-original.svg'
    },
    
    // Databases
    { 
      name: 'MySQL',
      iconUrl: '/mysql-original.svg'
    },
    { 
      name: 'PostgreSQL',
      iconUrl: '/postgresql-original.svg'
    },
    { 
      name: 'Sequelize',
      iconUrl: '/sequelize-original.svg',
      class: 'rounded p-1'
    },
    
    // DevOps & Tools
    { 
      name: 'Docker',
      iconUrl: '/docker-original.svg'
    },
    { 
      name: 'Git',
      iconUrl: '/git-original.svg'
    },
    { 
      name: 'GitHub',
      iconUrl: '/github-original.svg',
      class: 'bg-white rounded-full p-1'
    },
    { 
      name: 'npm',
      iconUrl: '/npm-original-wordmark.svg',
      class: 'rounded p-1'
    },
    { 
      name: 'yarn',
      iconUrl: '/yarn-original.svg',
      class: 'rounded p-1'
    },
    
    // Embedded & IoT
    { 
      name: 'Arduino',
      iconUrl: '/arduino-original.svg'
    },
    { 
      name: 'Raspberry Pi',
      iconUrl: '/raspberrypi-original.svg'
    },
    { 
      name: 'Node-RED',
      iconUrl: '/nodered-original.svg',
      class: 'rounded p-1'
    },
    
    // Programming Languages
    { 
      name: 'C',
      iconUrl: '/c-original.svg'
    },
    { 
      name: 'C++',
      iconUrl: '/cplusplus-original.svg'
    }
  ])
</script>
