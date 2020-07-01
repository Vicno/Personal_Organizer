import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      //paths: ["agendas"]
    })
  ],
  state: {
    agendaSelected: "Work",
    agendas: [
      {
        agendaId: "ANG-0001",
        name: "Work",
        description: "My Agenda to manage my workd",
        startHour: "10:00",
        endHour: "16:00",
        appointments: [
          {
            name: "Dentist",
            description: "I need to go to dentist",
            date: "7/15/2020",
            startHour: "10:00",
            endHour: "11:00",
            agendaId: "ANG-0001",
            participants: ["PART-001"]
          },
          {
            name: "Time to lunch",
            description: "I may eat in home for some reason",
            date: "7/15/2020",
            endDate: "7/25/2021",
            frequency: "Month",
            startHour: "12:00",
            endHour: "13:00",
            agendaId: "ANG-0001",
            participants: ["PART-001"]
          }
        ]
      }
    ],
    scheduledAppointments: [
      {
        name: "Dentist",
        description: "I need to go to dentist",
        date: "6/27/2020",
        startHour: "10:00",
        endHour: "11:00",
        agendaId: "ANG-0001",
        participants: ["PART-001"]
      }
    ],
    postponedAppointments: [
      {
        agendaId: "ANG-0001",
        name: "Study with no one",
        description: "I need help "
      }
    ],
    recursiveAppointments: [
      {
        name: "Time to lunch",
        description: "I msy eat in home for some reason",
        date: "7/15/2020",
        endDate: "7/25/2021",
        frequency: "Month",
        startHour: "12:00",
        endHour: "13:00",
        agendaId: "ANG-0001",
        participants: ["PART-001"]
      }
    ],
    participants: [
      {
        participantId: "PART-001",
        name: "Person A",
        contactNumber: 70710101
      }
    ],
    partIdToUpdate: "-1"
  },
  actions,
  getters,
  mutations
});
