<template>
  <div>
    <div>
      <div>
        <label>Choose an agenda: </label>
        <select v-model="agendaChosen" placeholder="Choose an agenda">
          <option :key="index" v-for="(element, index) in agendas">
            {{ element.agendaId }}
          </option>
        </select>
      </div>
      <div v-if="agendaChosen !== ''">
        <label>agenda Chosen </label>
        <table id="table1">
          <thead>
            <th>Agenda ID</th>
            <th>Name</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr
              :key="element.name"
              v-for="element in postponedAppointmentsList"
            >
              <td>{{ element.agendaId }}</td>
              <td>{{ element.name }}</td>
              <td>{{ element.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <table id="table2">
        <thead>
          <th>Agenda ID</th>
          <th>Name</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr :key="element.name" v-for="element in postponedAppointmentsList">
            <td>{{ element.agendaId }}</td>
            <td>{{ element.name }}</td>
            <td>{{ element.description }}</td>
            <td>
              <button
                @click="
                  deletePostApp({
                    agendaId: element.agendaId,
                    name: element.name
                  })
                "
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <input id="Name" placeholder="Name" v-model="name" />
    <br />
    <br />
    <input id="description" placeholder="Description" v-model="description" />
    <br />
    <br />
    <div class="form-row">
      <input v-model="date" type="date" id="dateP" name="dateP" />
    </div>
    <br />
    <br />
    <div class="form-row">
      <input
        type="time"
        id="begin_hour"
        name="begin_hour"
        v-model="begin_hour"
        required
      />
      <small class="timebegin">Begin Hour</small>
      <input
        type="time"
        id="end_hour"
        name="end_hour"
        v-model="end_hour"
        required
      />
      <small>End Hour</small>
    </div>
    <div>
      <br />
      <label>Target Agenda</label>
      <select v-model="targetAgenda" placeholder="Choose an agenda">
        <option :key="index" v-for="(element, index) in agendas">
          {{ element.agendaId }}
        </option>
      </select>
    </div>
    <br />
    <button v-on:click="savePostponedAppointment()">
      Postpone appointment
    </button>
    <br />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Postpone",
  data() {
    return {
      name: "",
      description: "",
      end_hour: "23:59",
      begin_hour: "00:00",
      date: "",
      agenda: "",
      participants: {}
    };
  },
  computed: {
    ...mapGetters(["getAgendas"]),
    ...mapGetters(["getAgendaAppointments"]),
    ...mapGetters(["getPostponedAppointments"]),
    agendas() {
      return this.getAgendas;
    },
    postponedAppointmentsList() {
      return this.getPostponedAppointments;
    }
  },
  methods: {
    ...mapActions(["addTargetAgendaAppointment"]),
    ...mapActions(["PostponeAppointment"]),
    ...mapActions(["deleteAppointment"]),
    savePostponedAppointment() {
      this.PostponeAppointment({
        name: this.name,
        description: this.description
      });
      this.deleteAppointment({
        name: this.name,
        agendaId: this.targetAgenda
      });
      this.addTargetAgendaAppointment({
        name: this.name,
        description: this.description,
        date: String(this.date),
        startHour: String(this.begin_hour),
        endHour: String(this.end_hour),
        agendaId: this.targetAgenda,
        participants: this.participants
      });
    },
    deletePostApp(postAppToDelete) {
      this.deleteAppointment(postAppToDelete);
    }
  }
};
</script>
<style src="@/views/SchedulingStyle.css" scoped></style>
