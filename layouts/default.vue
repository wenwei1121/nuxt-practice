<template>
  <div>
    <header>
      <nav class="container">
        <ul class="flex gap-4">
          <li v-for="link of linkList" :key="link.name">
            <NuxtLink :to="link.path" class="btn">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4 flex justify-between border-t-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
const linkList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
]
</script>

<style scoped>

</style>
