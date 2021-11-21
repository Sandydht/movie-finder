<template>
  <div id="homePage" class="mt-5">
    <search-bar @handle-submit="submit"></search-bar>

    <div class="p-5">
      <transition name="fade">
        <movie-list-skeleton v-if="isLoading" :count="skeletonCount"></movie-list-skeleton>
        <div v-else-if="!isLoading">
          <alert-message v-if="searchResult.Response === 'False'" :message="searchResult.Error"></alert-message>
          <movie-list v-else-if="searchResult.Response === 'True'"  :movies="searchResult"></movie-list>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition duration-150 opacity-1;
}

.fade-enter-from,
.fade-leave-to {
   @apply opacity-0;
}
</style>

<script>
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
import AlertMessage from '@/components/AlertMessage.vue'
import MovieListSkeleton from '@/components/MovieListSkeleton.vue'
import MovieSource from '@/data/movie-source.js'

export default {
  name: 'Home',
  components: {
    SearchBar,
    MovieList,
    AlertMessage,
    MovieListSkeleton
  },
  data() {
    return {
      searchResult: {},
      isLoading: null,
      skeletonCount: 10
    }
  },
  methods: {
    submit(value) {
      this.isLoading = true

      MovieSource
        .searchMovie(value)
        .then(response => {
          this.searchResult = response
        })
        .catch(err => {
          console.log('error: ', err)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
