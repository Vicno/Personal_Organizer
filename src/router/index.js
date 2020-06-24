import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/schedul",
    name: "Schedul",
    component: () => import("../views/Scheduling.vue")
  },
  {
    path: "/recursiveschedul",
    name: "RecursiveSchedul",
    component: () => import("../views/RecursiveScheduling.vue")
  },
  {
    path: "/participants",
    name: "Participants",
    component: () => import("../views/ParticipantsView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
