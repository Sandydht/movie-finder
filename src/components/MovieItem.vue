<template>
  <div id="movieItem" class="w-full bg-white rounded-md shadow-md flex flex-col overflow-hidden">
    <div class="h-full max-h-52 overflow-hidden">
      <img :src="checkPoster" :alt="checkImageAlt" class="w-full h-full object-cover object-center">
    </div>

    <div class="p-5">
      <div class="flex gap-2">
        <span class="py-1 px-3 bg-yellow-500 rounded-full text-white font-semibold">{{ checkYear }}</span>
        <span class="py-1 px-3 bg-yellow-500 rounded-full text-white font-semibold">{{ checkType }}</span>
      </div>

      <div class="mt-2">
        <p class="font-bold truncate">{{ checkTitle }}</p>

        <router-link :to="gotoDetail" class="min-w-44 min-h-44 flex items-center justify-center p-3 border-2 rounded-md mt-2 border-indigo-700 font-semibold text-indigo-700 hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white focus:outline-none">
          See detail
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImageNotAvailable from '@/assets/images/image-not-available.png'

export default {
  name: 'MovieItem',
  props: {
    id: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    year: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    poster: {
      type: String,
      required: false
    }
  },
  computed: {
    checkTitle() {
      return this.title === 'N/A' ? 'No movie title' : this.title
    },
    checkYear() {
      return this.year === 'N/A' ? 'No movie year' : this.year
    },
    checkType() {
      return this.type === 'N/A' ? 'No movie type' : this.type
    },
    checkPoster() {
      return this.poster === 'N/A' ? ImageNotAvailable : this.poster
    },
    checkImageAlt() {
      return this.poster === 'N/A' ? 'Image not available' : this.title
    },
    gotoDetail() {
      return `/detail/${this.id}`
    }
  }
}
</script>