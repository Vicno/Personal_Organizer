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
    path: "/updateRecursiveAppoint",
    name: "UpdateRecursiveAppoint",
    component: () => import("../views/UpdateRecursiveAppointment.vue")
  },
  {
    path: "/updateAppoint",
    name: "UpdateAppoint",
    component: () => import("../views/UpdateAppointment.vue")
  },
  {
    path: "/recursiveschedul",
    name: "RecursiveSchedul",
    component: () => import("../views/RecursiveScheduling.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../components/CalendarComponent.vue")
  },
  {
    path: "/participants",
    name: "Participants",
    component: () => import("../views/ParticipantsView.vue")
  },
  {
    path: "/postpone",
    name: "Postpone",
    component: () => import("../views/Postpone.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
