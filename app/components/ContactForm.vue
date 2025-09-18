<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <input type="hidden" name="access_key" :value="web3FormsAccessKey" />
    <input type="hidden" name="subject" value="New Contact Form Submission" />
    
    <div>
      <label for="name" class="block text-gray-300 mb-2">Nombre</label>
      <input 
        type="text" 
        id="name" 
        name="name"
        v-model="form.name"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      >
    </div>
    <div>
      <label for="email" class="block text-gray-300 mb-2">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email"
        v-model="form.email"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      >
    </div>
    <div>
      <label for="message" class="block text-gray-300 mb-2">Mensaje</label>
      <textarea 
        id="message" 
        name="message"
        v-model="form.message"
        rows="4"
        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      ></textarea>
    </div>
    <div v-if="status === 'success'" class="p-4 bg-green-100 text-green-700 rounded-lg">
      ¡Mensaje enviado con éxito!
    </div>
    <div v-else-if="status === 'error'" class="p-4 bg-red-100 text-red-700 rounded-lg">
      {{ result || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' }}
    </div>
    <button 
      type="submit" 
      :disabled="status === 'loading'"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span v-if="status === 'loading'">Enviando...</span>
      <span v-else>Enviar Mensaje</span>
    </button>
  </form>
</template>

<script setup>
const { web3FormsAccessKey } = useRuntimeConfig().public


const form = ref({
  name: '',
  email: '',
  message: ''
})

const result = ref('')
const status = ref('')

const submitForm = async () => {
  try {
    status.value = 'loading'
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        ...form.value,
        access_key: web3FormsAccessKey,
        subject: 'New Contact Form Submission'
      },
    })
    
    result.value = response.message
    
    if (response.success) {
      status.value = 'success'
      // Reset form on success
      form.value = { 
        name: '',
        email: '',
        message: ''
      }
    } else {
      status.value = 'error'
    }
  } catch (error) {
    status.value = 'error'
    result.value = 'Algo salió mal. Por favor, inténtalo de nuevo.'
  }
  
  // Clear status after 5 seconds
  if (status.value !== 'loading') {
    setTimeout(() => {
      status.value = ''
      result.value = ''
    }, 5000)
  }
}
</script>
