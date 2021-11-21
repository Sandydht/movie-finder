<template>
  <div id="app" class="w-full max-w-screen-tablet mx-auto">
    <app-bar></app-bar>
    <router-view />
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar
  }
}
</script>
