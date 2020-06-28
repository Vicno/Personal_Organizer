import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

export const mockStore = {
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
            date: "06/27/2020",
            startHour: "10:00",
            endHour: "11:00",
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
        date: "06/27/2020",
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
      }
    ],
    recursiveAppointments: [
      {
        name: "Dentist",
        description: "I need to go to dentist",
        date: "06/19/2020",
        endDate: "12/18/2020",
        frequency: "Day",
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
        contactNumber: 70710101
      }
    ],
    partIdToUpdate: "-1"
  },
  actions,
  getters,
  mutations
};
