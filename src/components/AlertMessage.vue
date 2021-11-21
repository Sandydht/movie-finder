<template>
  <div id="alertMessage">
    <p class="font-bold text-xl">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    message: {
      type: String,
      required: false
    }
  }
}
</script>