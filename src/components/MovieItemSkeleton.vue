<template>
  <div id="movieItemSkeleton" class="w-full h-full min-h-44 bg-white rounded-md shadow-md overflow-hidden">
    <div class="h-52 bg-gray-400 animate-pulse"></div>

    <div class="p-5">
      <div class="flex gap-2">
        <div class="w-20 h-8 rounded-full bg-gray-400 animate-pulse"></div>
        <div class="w-20 h-8 rounded-full bg-gray-400 animate-pulse"></div>
      </div>

      <div class="mt-2 flex flex-col gap-2">
        <div class="w-full h-8 bg-gray-400 animate-pulse"></div>
        <div class="w-full h-8 bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItemSkeleton'
}
</script>