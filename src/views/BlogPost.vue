<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { marked } from 'marked';
import postsData from '../data/posts.json';

const route = useRoute();

const posts = postsData as any[];

const post = computed(() => {
  return posts.find((p: any) => p.id === route.params.id);
});

const content = computed(() => {
  if (!post.value) return '<p>Post not found.</p>';
  return `
    <h2>${post.value.title}</h2>
    ${marked.parse(post.value.content)}
  `;
});
</script>

<template>
  <div class="blog-post">
    <router-link to="/" class="back">← Back to Posts</router-link>
    <article class="content" v-html="content"></article>
  </div>
</template>

<style scoped lang="scss">
.blog-post {
  .back {
    display: inline-block;
    margin-bottom: 2rem;
    text-decoration: none;
    color: #666;
    &:hover {
      color: #000;
    }
  }

  .content {
    line-height: 1.6;
    font-size: 1.1rem;

    :deep(h2) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    :deep(p) {
      margin-bottom: 1rem;
    }
  }
}
</style>
