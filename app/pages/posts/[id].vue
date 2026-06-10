<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <section>
    <h1>Post Detail</h1>
    <p>Post ID: {{ route.params.id }}</p>
  </section>
</template>
