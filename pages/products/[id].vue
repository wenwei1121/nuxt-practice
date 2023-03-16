<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  // const url = `http://fakestoreapi.com/products/${id}`
  // const { data: product } = await useFetch(url)

  const url = `http://fakestoreapi.com/products/${id}`
  const { data: product } = await useFetch(url, { key: id })

  definePageMeta({
    layout: "products"
  })
</script>

<style scoped>

</style>