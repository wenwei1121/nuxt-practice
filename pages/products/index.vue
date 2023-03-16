<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p of products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data: products } = await useFetch("http://fakestoreapi.com/products")
</script>