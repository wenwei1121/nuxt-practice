<template>
  <div>
    <Icon type="" name="logos:nuxt" size="360" />
    <h1 class="font-bold">Home Page</h1>
    <button @click="confirm">
      simpleSwal
    </button>
  </div>
</template>

<script setup>
  const { simpleSwal } = useAlert()
  const confirm = () => {
    simpleSwal()
  }
</script>

<style scoped></style>
