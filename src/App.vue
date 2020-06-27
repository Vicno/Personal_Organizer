<template>
  <v-app>
    <v-app-bar app color="#gggg   " dark>
      <v-select
        v-model="agendaSelected"
        :items="agendasName()"
        label="Agenda"
        persistent-hint
        return-object
        single-line
        @input="updateAgenda"
      ></v-select>
      <v-btn icon router :to="'/schedul'">
        <v-icon>mdi-book-plus</v-icon>
        <span class="mr-2">Book new Appointment</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon router :to="'/schedul'">
        <v-icon>mdi-book-plus-multiple</v-icon>
        <span class="mr-2">Book new Recurrent Appointment</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon router :to="'/calendar'">
        <v-icon>mdi-calendar-month</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon router :to="'/Agenda'">
        <v-icon>mdi-book-plus-multiple</v-icon>
        <span class="mr-2">New Agenda</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  router,
  data() {
    return {
      agendaSelected: ""
    };
  },
  computed: {
    ...mapGetters(["getAgendas"]),
    agendas() {
      return this.getAgendas;
    }
  },
  methods: {
    ...mapActions(["updateAgendaSelected"]),
    agendasName() {
      var agendaName = [];
      for (var i = 0; i < this.agendas.length; i++) {
        agendaName.push(this.agendas[i].name);
      }
      return agendaName;
    },
    updateAgenda() {
      this.updateAgendaSelected(this.agendaSelected);
    }
  }
};
</script>
