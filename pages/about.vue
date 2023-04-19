<template>
  <div>
    <TestFoldComponents />
    <h1>About Pages</h1>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('currency/JPY')
</script>

<style scoped>

</style>
