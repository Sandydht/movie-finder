<template>
  <div id="movieListSkeleton" class="w-full grid gap-5 sm:grid-cols-2 md:grid-cols-3">
    <movie-item-skeleton v-for="index in count" :key="index"></movie-item-skeleton>
  </div>
</template>

<script>
import MovieItemSkeleton from '@/components/MovieItemSkeleton.vue'

export default {
  name: 'MovieListSkeleton',
  props: {
    count: {
      type: Number,
      default: 10,
      required: true
    }
  },
  components: {
    MovieItemSkeleton
  }
}
</script>