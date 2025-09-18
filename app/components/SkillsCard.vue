<template>
  <div 
    class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 flex flex-col items-center"
    :class="{ 'animate-fade-in-up': animated }"
  >
    <NuxtImg 
      :src="skill.iconUrl" 
      :id="skill.name"
      :alt="skill.name" 
      width="48" 
      height="48"
      class="h-12 w-12 object-contain mb-4"
      :class="skill.class"
    />
    <h3 class="text-lg font-semibold text-gray-100">{{ skill.name }}</h3>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  },
  animated: {
    type: Boolean,
    default: false
  }
});
</script>
