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
            date: "06/18/2020",
            startHour: "10:00",
            endHour: "11:00",
            agendaId: "ANG-0001",
            participants: ["PART-001"]
          },
          {
            name: "Psicologo",
            description: "I need to go to nonwhere",
            date: "06/18/2020",
            startHour: "11:00",
            endHour: "12:00",
            agendaId: "ANG-0002",
            participants: ["PART-001"]
          }
        ]
      }
      // more agendas
    ],
    scheduledAppointments: [
      {
        name: "Dentist",
        description: "I need to go to dentist",
        date: "06/18/2020",
        startHour: "10:00",
        endHour: "11:00",
        agendaId: "ANG-0001",
        participants: ["PART-001"]
      }
    ],
    postponedAppointments: [
      {
        agendaId: "ANG-0001",
        name: "Dentist",
        description: "I need to go to dentist"
        // date: "06/18/2020"
        // startHour: "10:00",
        // endHour: "11:00",
        // agendaId: "ANG-001"
      }
    ],
    recursiveAppointments: [
      {
        name: "Dentist",
        description: "I need to go to dentist",
        date: "06/19/2020",
        endDate: "12/18/2020",
        frequency: "Day|Week|Month",
        startHour: "10:00",
        endHour: "11:00",
        agendaId: "ANG-0001",
        participants: ["PART-001"]
      }
    ],
    participants: [
      {
        participantId: "PART-001",
        name: "Person A",
        contactNumber: "70710101"
      }
    ]
  },
  actions,
  getters,
  mutations
});
