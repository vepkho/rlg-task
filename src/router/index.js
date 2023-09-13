import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ComingSoon from "../components/ComingSoon/ComingSoon.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sport",
    name: "Sport",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Live Sport",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Casino",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Live Casino",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Virtual",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Games",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Bingo",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Bingo",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Beton",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Virtual",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Poker",
    component: ComingSoon,
  },
  {
    path: "/",
    name: "Promotions",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
