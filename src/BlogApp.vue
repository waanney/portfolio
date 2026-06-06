<script setup lang="ts">
import { usePreloader } from "./composables/usePreloader";
import { useRoute } from "vue-router";
import { computed } from "vue";
import HeaderLink from "./components/HeaderLink.vue";

usePreloader();

const route = useRoute();

const routeLinks = ["blog", "novels", "publications", "resume"];
const sections = ["about", "projects", "blog", "novels", "publications", "resume", "contact"];
const ITEM_WIDTH = 128;

const activeLink = computed(() => {
  const path = route.path;
  if (path.includes("novels")) return "novels";
  if (path.includes("publications")) return "publications";
  if (path.includes("resume")) return "resume";
  return "blog";
});

const barStyle = computed(() => {
  const index = sections.indexOf(activeLink.value);
  const left = index * ITEM_WIDTH;
  return {
    transform: `translateX(${left}px)`,
  };
});

const handleLinkClick = (link: string) => {
  if (routeLinks.includes(link)) {
    window.location.href = `/portfolio/blog/#/${link === "blog" ? "" : link}`;
  } else {
    window.location.href = `/portfolio/#${link}`;
  }
};
</script>

<template>
  <div class="blog-layout">
    <div class="header-home">
      <div class="header-home-links">
        <div class="header-home-bar header-home-bar-active" :style="barStyle"></div>
        <HeaderLink
          v-for="section in sections"
          :key="section"
          :is-active="activeLink === section"
          :class="['header-home-link', { 'header-home-link-active': activeLink === section }]"
          @click="handleLinkClick(section)"
        >
          {{ section.toUpperCase() }}
        </HeaderLink>
      </div>
    </div>
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
  padding-top: 6rem; /* Make room for the fixed header */
}

.header-home {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-home-links {
  position: relative;
  display: flex;
  padding: 3px;
  background-color: var(--color-beige-500);
  border-radius: 100px;
  color: var(--color-text-400);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.header-home-bar {
  position: absolute;
  top: 3px;
  left: 3px;
  height: calc(100% - 6px);
  width: 128px;
  background: var(--color-orange-400);
  border-radius: 100px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.header-home-link {
  position: relative;
  z-index: 2;
  letter-spacing: 0.02em;
  font-weight: 700;
  border: none;
  background: none;
  transition: color 0.1s ease-in-out;
  font-size: 14px;
  width: 128px;
  text-align: center;
  cursor: pointer;
  padding: 10px 0;
}

.header-home-link-active {
  color: #fff;
}

.blog-main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
}
</style>
