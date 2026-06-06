<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Mock data, to be replaced with real markdown parser
const content = computed(() => {
  return `
    <h2>Welcome to my new Portfolio</h2>
    <p>This blog page is built using Vue Router and will support Markdown in the future!</p>
    <p>Post ID: ${route.params.id}</p>
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
