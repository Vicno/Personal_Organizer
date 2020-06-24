import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const mockStore = {
  state: {
    agendas: [
      {
        agendaId: "ANG-0001",
        name: "Work",
        description: "My Agenda to manage my workd",
        startHour: "10:00",
        endHour: "16:00",
        appointments: [
          // scheduledAppointments.filter(app => app.agendaId === this.agendaId)
          // concat
          // Iterate to simulate by clonning
          // recursiveAppointments.filter(app => app.agendaId === this.agendaId)
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
        participantId: "PART-1",
        name: "Person A",
        contactNumber: "70710101"
      }
    ]
  },
  actions,
  getters,
  mutations
};
