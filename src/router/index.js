import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Casino from "../views/Casino.vue";
import ComingSoon from "../components/ComingSoon/ComingSoon.vue";
import NotFound from "../components/NotFound/NotFound.vue";
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
    path: "/live-sport",
    name: "Live Sport",
    component: ComingSoon,
  },
  {
    path: "/casino",
    name: "Casino",
    component: Casino,
  },
  {
    path: "/live-casino",
    name: "Live Casino",
    component: ComingSoon,
  },
  {
    path: "/virtual",
    name: "Virtual",
    component: ComingSoon,
  },
  {
    path: "/games",
    name: "Games",
    component: ComingSoon,
  },
  {
    path: "/bingo",
    name: "Bingo",
    component: ComingSoon,
  },
  {
    path: "/beton",
    name: "Beton",
    component: ComingSoon,
  },
  {
    path: "/poker",
    name: "Poker",
    component: ComingSoon,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: ComingSoon,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
