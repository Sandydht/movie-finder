<template>
  <div id="searchBar" class="w-full p-5 bg-white sticky top-0 z-10">
    <form @submit.prevent="submit" class="grid grid-cols-auto-1fr border-2 border-indigo-700 rounded-md overflow-hidden text-gray-300 hover:text-indigo-800 hover:border-indigo-800 focus-within:border-indigo-800 focus-within:text-indigo-800">
      <button type="submit" class="min-h-44 min-w-44 inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <input type="search" placeholder="Enter movie title" v-model="inputValue" class="min-h-44 min-w-44 inline-flex items-center justify-center px-3 font-semibold text-black tracking-wider focus:outline-none">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    submit() {
      if (this.inputValue !== '') {
        this.$emit('handleSubmit', this.inputValue)
      }
    }
  }
}
</script>