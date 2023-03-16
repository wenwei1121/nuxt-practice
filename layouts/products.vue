<template>
  <div>
    <div>
      <slot />
    </div>

    <header>
      <nav>
        <NuxtLink class="btn" to="/">
          Home
        </NuxtLink>
        <NuxtLink class="btn" to="/products">
          Products
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>