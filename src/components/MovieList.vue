<template>
  <div id="movieList" class="w-full grid gap-5 sm:grid-cols-2 md:grid-cols-3">
    <movie-item
      v-for="(movie, index) in movies.Search"
      :key="index"
      :id="movie.imdbID"
      :title="movie.Title"
      :year="movie.Year"
      :type="movie.Type"
      :poster="movie.Poster"
    ></movie-item>
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  props: {
    movies: {
      type: Object,
      required: false
    }
  }
}
</script>