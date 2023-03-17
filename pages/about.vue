<template>
  <div>
    <h1>About Pages</h1>
  </div>
</template>

<script setup>
  const { data } = await useFetch("/api/currency/JPY")
</script>

<style scoped>

</style>