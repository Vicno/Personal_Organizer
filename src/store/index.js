import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
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
            date: "6/28/2020",
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
      },
      {
        agendaId: "ANG-0002",
        name: "Depresionfrombugs",
        description: "1212",
        startHour: "11:11",
        endHour: "22:22",
        appointments: [
          {
            name: "Mass Suicide",
            description: "I don't want to fix bugs anymore, please help",
            date: "07/01/2020",
            startHour: "16:00",
            endHour: "19:59",
            agendaId: "ANG-0002",
            participants: {}
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
      },
      {
        name: "wer",
        description: "wer",
        date: "07/01/2020",
        startHour: "16:00",
        endHour: "19:59",
        agendaId: "ANG-0002",
        participants: {}
      }
    ],
    postponedAppointments: [
      {
        name: "Dentist",
        description: "I need to go to dentist"
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
        participantId: "PART-1",
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
