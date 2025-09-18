<template>
  <div 
    class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 h-full flex flex-col"
    :class="{ 'animate-fade-in-up': animated }"
  >
    <div class="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <h3 class="text-2xl font-bold text-white text-center px-4">{{ project.title }}</h3>
    </div>
    <div class="p-6 flex-1 flex flex-col">
      <p class="text-gray-300 mb-4 flex-1">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.technologies" 
          :key="tech"
          class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  animated: {
    type: Boolean,
    default: false
  }
});
</script>
