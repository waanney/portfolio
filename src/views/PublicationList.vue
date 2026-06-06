<script setup lang="ts">
import { ref } from 'vue';
import postsData from '../data/posts.json';

const posts = ref<any[]>(postsData.filter((p: any) => p.category === "Publication"));
</script>

<template>
  <div class="pub-container">
    <div class="projects-title">
      <h2 class="projects-title-copy">Publications</h2>
    </div>
    
    <div v-if="posts.length === 0" class="empty-state">
      <p>No publications available yet.</p>
    </div>
    
    <div class="projects-cards" v-else>
      <router-link 
        v-for="post in posts" 
        :key="post.id" 
        :to="`/post/${post.id}`" 
        class="preview-card"
      >
        <div class="preview-card-top">
          <div class="preview-card-image-wrapper">
            <div class="preview-card-image-container">
               <!-- Placeholder gradient for publications -->
               <div class="placeholder-image"></div>
            </div>
          </div>
          <div class="preview-card-overlay">
            <div class="preview-card-edge">
              <div class="preview-card-button">
                 <svg class="preview-card-button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="preview-card-content">
          <div class="preview-card-copys">
            <h3 class="preview-card-title">{{ post.title }}</h3>
            <p class="preview-card-description">{{ post.date }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/mixins.scss" as mixins;

.pub-container {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.projects-title-copy {
  font-weight: 900;
  letter-spacing: 0.02em;
  font-size: 40px;
  color: #1a1a1a;
  margin: 0;
}

.empty-state {
  color: #666;
  font-style: italic;
}

.projects-cards {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.preview-card {
  --hover: 0;
  position: relative;
  border-radius: 24px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: inherit;
  
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background-color: rgba(0,0,0,0.03);
    border-radius: 24px;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    --hover: 1;
    &::after {
      opacity: 1;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }

  &-overlay {
    &:hover { display: none; }
  }

  &-edge {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-background-300, var(--color-beige-400));
    padding-left: 6px;
    padding-top: 6px;
    border-radius: 32px 0 0 0;
    padding-right: 1px;
    padding-bottom: 1px;
  }

  &-button {
    background: var(--color-orange-400, #ff7e00);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &-arrow {
      width: 24px;
      height: 24px;
      transition: transform 0.2s ease-in-out;
      transform: rotate(calc(var(--hover) * -45deg));
    }
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
  }

  &-image-wrapper {
    border-radius: 16px;
    overflow: hidden;
    background-color: #ddd;
    width: 100%;
    height: 100%;
  }

  &-image-container {
    transition: transform 0.2s ease-in-out;
    transform: scale(calc(1 + var(--hover) * 0.02));
    width: 100%;
    height: 100%;
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }

  &-copys {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
  }

  &-description {
    font-size: 14px;
    color: #666;
    font-weight: 500;
    margin: 0;
  }
}
</style>
