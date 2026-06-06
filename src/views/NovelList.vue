<script setup lang="ts">
import { ref } from 'vue';
import postsData from '../data/posts.json';

const posts = ref<any[]>(postsData.filter((p: any) => p.category === "Novel"));
</script>

<template>
  <div class="novel-container">
    <h1>Web Novels</h1>
    <div v-if="posts.length === 0" class="empty-state">
      <p>No novels published yet.</p>
    </div>
    <div class="posts-grid" v-else>
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h2><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></h2>
        <span class="date">{{ post.date }}</span>
      </article>
    </div>
  </div>
</template>

<style scoped>
.novel-container {
  padding-top: 2rem;
}
.empty-state {
  margin-top: 2rem;
  color: #666;
  font-style: italic;
}
.posts-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}
.post-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.post-card h2 {
  margin: 0 0 0.5rem 0;
}
.post-card a {
  color: var(--color-orange-400, #ff7e00);
  text-decoration: none;
}
.post-card a:hover {
  text-decoration: underline;
}
.date {
  color: #666;
  font-size: 0.9rem;
}
</style>
