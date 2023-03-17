<template>
  <div>
    <Head>
      <Title>Nuxt | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  // const url = `http://fakestoreapi.com/products/${id}`
  // const { data: product } = await useFetch(url)

  const url = `http://fakestoreapi.com/products/${id}`
  const { data: product } = await useFetch(url, { key: id })

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: "Product Not Found", fatal: true })
  }

  definePageMeta({
    layout: "products"
  })
</script>

<style scoped>

</style>