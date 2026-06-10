<template>
  <div>
    <header class="header">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/posts">Posts</NuxtLink>
    </header>

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #d1d5db;
}

.main {
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
