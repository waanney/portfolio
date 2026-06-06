<script setup lang="ts">
import { ref } from 'vue';

// For now, this is a placeholder. You can later integrate Vite's glob import to read markdown files.
const posts = ref([
  { id: 1, title: 'Welcome to my new Portfolio', date: '2026-06-06', excerpt: 'Hello World! This is my first blog post.' },
]);
</script>

<template>
  <div class="blog-list">
    <h1>Blog</h1>
    <div class="posts">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h2><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></h2>
        <span class="date">{{ post.date }}</span>
        <p>{{ post.excerpt }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-list {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}
.post-card {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);

  h2 {
    margin-bottom: 0.5rem;
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .date {
    display: block;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
}
</style>
