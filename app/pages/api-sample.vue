<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <section>
    <h1>API Sample</h1>
    <pre>{{ data }}</pre>
  </section>
</template>
