<script setup lang="ts">
import { usePreloader } from "./composables/usePreloader";

usePreloader();
</script>

<template>
  <div class="blog-layout">
    <header class="blog-header">
      <a href="../" class="back-link">← Back to Portfolio</a>
      <div class="nav-links">
        <router-link to="/">Blog</router-link>
        <router-link to="/resume">Resume</router-link>
      </div>
    </header>
    <main class="blog-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.blog-layout {
  min-height: 100vh;
  background: var(--color-background-300, var(--color-beige-400));
  color: #1a1a1a;
  font-family: "Urbanist", sans-serif;
  overflow-y: auto;
  padding-bottom: 4rem;
}

.blog-header {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.back-link, .nav-links a {
  text-decoration: none;
  font-weight: bold;
  color: inherit;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a.router-link-active {
  text-decoration: underline;
}

.blog-main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
}
</style>
