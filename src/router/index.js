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
    path: "/Agenda",
    name: "Agenda",
    component: () => import("@/views/Agenda.vue")
  },
  {
    path: "/updateAppoint",
    name: "UpdateAppoint",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpdateAppointment.vue")
  },
  {
    path: "/Agenda",
    name: "Agenda",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Agenda.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../components/CalendarComponent.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
