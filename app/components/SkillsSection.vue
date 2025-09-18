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
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      class: 'bg-white rounded-full p-1'
    },
    { 
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'React Native',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      class: 'text-blue-400'
    },
    { 
      name: 'Vue.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    { 
      name: 'Tailwind CSS',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    { 
      name: 'Material UI',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },
    { 
      name: 'HTML5',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'JavaScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'TypeScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    
    // Backend
    { 
      name: 'Node.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Express',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      class: 'bg-white rounded p-1'
    },
    { 
      name: 'Python',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'FastAPI',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      class: 'rounded p-1'
    },
    { 
      name: 'Django',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      class: 'bg-white rounded-full p-1'
    },
    { 
      name: 'Java',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    
    // Databases
    { 
      name: 'MySQL',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'PostgreSQL',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    { 
      name: 'Sequelize',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
      class: 'rounded p-1'
    },
    
    // DevOps & Tools
    { 
      name: 'Docker',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    { 
      name: 'Git',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'GitHub',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      class: 'bg-white rounded-full p-1'
    },
    { 
      name: 'npm',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      class: 'rounded p-1'
    },
    { 
      name: 'yarn',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
      class: 'rounded p-1'
    },
    
    // Embedded & IoT
    { 
      name: 'Arduino',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'
    },
    { 
      name: 'Raspberry Pi',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg'
    },
    { 
      name: 'Node-RED',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodered/nodered-original.svg',
      class: 'rounded p-1'
    },
    
    // Programming Languages
    { 
      name: 'C',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    { 
      name: 'C++',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    }
  ])
</script>
