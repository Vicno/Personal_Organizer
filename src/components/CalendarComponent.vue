<template>
  <div>
    <v-sheet tile height="54" color="grey lighten-3" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] }
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ]
  }),
  computed: {
    ...mapGetters([
      "getAgendas",
      "getAppointments",
      "getrecursiveAppointments",
      "getpostponedAppointments"
    ]),
    appointments() {
      return this.getAppointments;
    },
    recursiveAppointments() {
      return this.getrecursiveAppointments;
    },
    postponedAppointments() {
      return this.getpostponedAppointments;
    },
    agendas() {
      return this.getAgendas;
    }
  },
  methods: {
    getEvents() {
      let events = [];
      var agendaAppointments = this.agendas[0].appointments;
      console.log(agendaAppointments[0].name);
      for (let i = 0; i < agendaAppointments.length; i++) {
        var datearray1 = agendaAppointments[i].date.split("/");
        var appointmentDateStart =
          datearray1[2] +
          "-" +
          datearray1[0] +
          "-" +
          datearray1[1] +
          " " +
          agendaAppointments[i].startHour;
        var appointmentDateEnd =
          datearray1[2] +
          "-" +
          datearray1[0] +
          "-" +
          datearray1[1] +
          " " +
          this.appointments[i].endHour;
        events.push({
          name: agendaAppointments[i].name,
          start: appointmentDateStart,
          end: appointmentDateEnd,
          color: this.colors[this.rnd(0, this.colors.length - 1)]
        });
      }
      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</script>
