<script setup lang="ts">
type Post = {
  id: number
  title: string
}

const { data: posts, status, error } = await useFetch<Post[]>(
  'https://jsonplaceholder.typicode.com/posts',
)
</script>

<template>
  <section>
    <h1>Posts</h1>

    <p v-if="status === 'pending'">
      読み込み中...
    </p>
    <p v-else-if="error">
      記事一覧の取得に失敗しました。
    </p>

    <ul v-else>
      <li
        v-for="post in posts?.slice(0, 5)"
        :key="post.id"
      >
        <NuxtLink :to="`/posts/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
