<script setup lang="ts">
const { count, doubled, increment } = useCounter()

const message = ref('')

type HelloResponse = {
  message: string
}

const submit = async () => {
  const result = await $fetch<HelloResponse>('/api/hello')
  message.value = result.message
}
</script>

<template>
  <section>
    <h1>Home</h1>
    <AppAlert>自動インポートされたコンポーネントです。</AppAlert>

    <h2>Auto-imports</h2>
    <button @click="increment">
      Count: {{ count }}
    </button>
    <p>Doubled: {{ doubled }}</p>

    <h2>$fetch</h2>
    <button @click="submit">
      送信
    </button>
    <p>{{ message }}</p>
  </section>
</template>
