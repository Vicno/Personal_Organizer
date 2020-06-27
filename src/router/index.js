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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scheduling.vue"),
  },
  {
    path: "/Agenda",
    name: "Agenda",
    component: () => import("@/views/Agenda.vue"),
  },
  {
    path: "/updateAppoint",
    name: "UpdateAppoint",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpdateAppointment.vue")
  },
  {
    path: "/Agenda",
    name: "Agenda",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Agenda.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CalendarComponent.vue"
      )
  }
];

const router = new VueRouter({
  routes,
});

export default router;
