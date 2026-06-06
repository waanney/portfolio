import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./assets/styles/index.scss";
import BlogApp from "./BlogApp.vue";
import BlogList from "./views/BlogList.vue";
import BlogPost from "./views/BlogPost.vue";
import Resume from "./views/Resume.vue";

const routes = [
  { path: '/', component: BlogList },
  { path: '/post/:id', component: BlogPost },
  { path: '/resume', component: Resume },
  { path: '/novels', component: () => import('./views/NovelList.vue') },
  { path: '/publications', component: () => import('./views/PublicationList.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(BlogApp).use(router).mount("#app");
