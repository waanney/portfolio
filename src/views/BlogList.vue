<script setup lang="ts">
import { ref } from 'vue';
import postsData from '../data/posts.json';

const posts = ref<any[]>(postsData);
</script>

<template>
  <div class="blog-list">
    <h1>Blog</h1>
    <div class="posts">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h2><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></h2>
        <span class="date">{{ post.date }}</span>
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
