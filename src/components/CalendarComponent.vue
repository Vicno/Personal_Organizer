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
    ],
    spaceinagenda: []
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
      // First get Agenda from the name of the Agenda Selected
      var indexselectedAgenda = this.agendas.findIndex(
        ag => ag.name === this.selectedAgenda
      );
      // Get the appointments of the agenda selected
      var agendaAppointments = this.agendas[indexselectedAgenda].appointments;
      //Select agenda
      agendaAppointments.forEach(appointment => {
        var daysforRecursive = this.getDatesFromRecursive(appointment);
        console.log(daysforRecursive);
        daysforRecursive.forEach(element => {
          this.changeformatdatehour(
            element,
            appointment.startHour,
            appointment.endHour
          );
          events.push({
            name: appointment.name,
            start: this.spaceinagenda[0],
            end: this.spaceinagenda[1],
            description: appointment.description,
            color: this.colors[this.rnd(0, this.colors.length - 1)]
          });
        });
      });
      this.events = events;
    },
    // Receives an appointment, puts in format the space it will use in date and hour
    changeformatdatehour(fecha, startHour, endHour) {
      var datearray1 = fecha.split("/");
      var appointmentDateStart =
        datearray1[2] +
        "-" +
        datearray1[0] +
        "-" +
        datearray1[1] +
        " " +
        startHour;
      var appointmentDateEnd =
        datearray1[2] +
        "-" +
        datearray1[0] +
        "-" +
        datearray1[1] +
        " " +
        endHour;
      this.spaceinagenda = [appointmentDateStart, appointmentDateEnd];
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
    },
    calculatedaysofmonth(month, year) {
      //Hundred times more efficient than automatica calculation
      switch (month) {
        case 1:
          return 31;
        case 2:
          //Si es año bisiesto
          if (year % 4 === 0) {
            return 29;
          } else {
            return 28;
          }
        case 3:
          return 31;
        case 4:
          return 30;
        case 5:
          return 31;
        case 6:
          return 30;
        case 7:
          return 31;
        case 8:
          return 31;
        case 9:
          return 30;
        case 10:
          return 31;
        case 11:
          return 30;
        case 12:
          return 31;
      }
    },
    adddaystodate(startday, daystosumup) {
      //01 29 2021
      let fechastartsplit = startday.split("/");
      var daysofmonth = this.calculatedaysofmonth(
        parseInt(fechastartsplit[0]),
        parseInt(fechastartsplit[2])
      );
      var days = parseInt(fechastartsplit[1]) + daystosumup;
      // si los dias superan a los del mes, se suma 1 al mes y se resta los dias del mes a fecha
      if (days <= daysofmonth) {
        return (
          parseInt(fechastartsplit[0]) +
          "/" +
          days +
          "/" +
          parseInt(fechastartsplit[2])
        );
      } else {
        days = parseInt(fechastartsplit[1]) + daystosumup - daysofmonth;
        var months = parseInt(fechastartsplit[0]) + 1;
        if (months <= 12) {
          return months + "/" + days + "/" + parseInt(fechastartsplit[2]);
        } else {
          months = months - 12;
          var years = parseInt(fechastartsplit[2]) + 1;
          return months + "/" + days + "/" + years;
        }
      }
    },
    //Sums days do date
    formatDate(fechasplit, daystosumup) {
      let days = parseInt(fechasplit[1]) + daystosumup;
      return new Date(fechasplit[2], fechasplit[0] - 1, days);
    },
    getDatesFromRecursive(appointment) {
      if (appointment.endDate !== undefined) {
        var dates = [];
        var startday = appointment.date;
        var endday = appointment.endDate;
        let daystosumup = 0; //days to add
        //Save start day and end day of appointment in format to getTime
        let fechastartsplit = startday.split("/");
        let fechaendsplit = endday.split("/");
        let fechastart = this.formatDate(fechastartsplit, daystosumup);
        let fechaend = this.formatDate(fechaendsplit, daystosumup);
        // While the start date is <= to end day
        while (fechastart.getTime() <= fechaend.getTime()) {
          //Save start date in dates
          startday = this.adddaystodate(startday, daystosumup);
          //console.log(startday);
          dates.push(startday);
          //Add one day/week/month to start date
          if (appointment.frequency === "Day") {
            daystosumup = 1;
            fechastartsplit = startday.split("/");
            fechastart = this.formatDate(fechastartsplit, daystosumup);
          } else if (appointment.frequency === "Week") {
            daystosumup = 7;
            fechastartsplit = startday.split("/");
            fechastart = this.formatDate(fechastartsplit, daystosumup);
            //
          } else if (appointment.frequency === "Month") {
            //Si es el ultimo día del mes
            fechastartsplit = startday.split("/");
            daystosumup = this.calculatedaysofmonth(
              parseInt(fechastartsplit[0]),
              parseInt(fechastartsplit[2])
            );
            fechastart = this.formatDate(fechastartsplit, daystosumup);
          }
        }
        var datescorrected = [];
        dates.forEach(element => {
          var dia = parseInt(element.split("/")[1]);
          var mes = parseInt(element.split("/")[0]);
          var año = parseInt(element.split("/")[2]);
          var daysofmonth = this.calculatedaysofmonth(mes, año);
          // si el dia es mayor a 29 y es febrero Y ES BISIESTO y es mensual, asi que fin de mes
          if (dia > 29 && mes === 2 && año % 4 === 0) {
            datescorrected.push(mes + "/" + 29 + "/" + año);
            // si el dia es mayor a 28 y es febrero Y NO ES BISIESTO y es mensual, asi que fin de mes
          } else if (dia > 28 && mes === 2 && año % 4 !== 0) {
            datescorrected.push(mes + "/" + 28 + "/" + año);
            //Si es
          } else if (dia > 30 && daysofmonth === 30) {
            datescorrected.push(mes + "/" + 30 + "/" + año);
          } else {
            datescorrected.push(mes + "/" + dia + "/" + año);
          }
        });
        return datescorrected;
      } else {
        //console.log([appointment.date]);
        return [appointment.date];
      }
    }
  }
};
</script>
