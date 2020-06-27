<template>
  <div>
    <v-sheet tile height="54" color="grey lighten-3" class="d-flex">
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title v-if="$refs.calendar">
        {{ $refs.calendar.title }}
      </v-toolbar-title>
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
        @click:event="showEvent"
        @click:more="viewDay"
        @click:date="viewDay"
      ></v-calendar>
      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        offset-x
      >
        <v-card color="grey lighten-4" min-width="350px" flat>
          <v-toolbar :color="selectedEvent.color" dark>
            <v-btn icon router :to="'/updateAppoint'">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <!--router :to="'/participants'"-->
              <v-icon>mdi-account-multiple-plus</v-icon>
            </v-btn>
            <v-btn icon>
              <!--router :to="'/postpone'"-->
              <v-icon>mdi-clock-time-four</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.description"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary" @click="selectedOpen = false">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
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
      "getpostponedAppointments",
      "getAgendaSelected"
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
    },
    selectedAgenda() {
      return this.getAgendaSelected;
    }
  },
  methods: {
    getEvents() {
      let events = [];
      var indexselectedAgenda = this.agendas.findIndex(
        ag => ag.name === this.selectedAgenda
      );
      var agendaAppointments = this.agendas[indexselectedAgenda].appointments;
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
          description: agendaAppointments[i].description,
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
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    }
  }
};
</script>
