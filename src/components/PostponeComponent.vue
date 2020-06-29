<template>
  <div>
    <div>
      <div>
        <label>Choose an agenda: </label>
        <select v-model="agenda" placeholder="Choose an agenda">
          <option :key="index" v-for="(element, index) in agendas">
            {{ element.agendaId }}
          </option>
        </select>
      </div>
      <div v-if="agenda !== ''">
        <label>agenda Chosen </label>
        <table id="table1">
          <thead>
            <th>name</th>
            <th>description</th>
            <th>date</th>
            <th>startHour</th>
            <th>endHour</th>
            <th>agendaId</th>
            <th>participants</th>
            <th>Postpone Appointment?</th>
          </thead>
          <tbody>
            <tr :key="element.name" v-for="element in globalAppointmentsList">
              <td>{{ element.name }}</td>
              <td>{{ element.description }}</td>
              <td>{{ element.date }}</td>
              <td>{{ element.startHour }}</td>
              <td>{{ element.endHour }}</td>
              <td>{{ element.agendaId }}</td>
              <td>{{ element.participants }}</td>
              <td>
                <button v-on:click="savePostponedAppointment(element)">
                  Postpone
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br /><label>Global Postponed List</label>
      <table id="table2">
        <thead>
          <th>Name</th>
          <th>Description</th>
          <th>Assign appointment?</th>
          <th>Delete appointment?</th>
        </thead>
        <tbody>
          <tr :key="obj.name" v-for="obj in postponedAppointmentsList">
            <td>{{ obj.name }}</td>
            <td>{{ obj.description }}</td>
            <td>
              <button v-on:click="EnablePostAppointment(obj)">
                Enable
              </button>
            </td>
            <td>
              <button v-on:click="DeletePostAppointment(obj)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
    <br />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Postpone",
  data() {
    return {
      targetAgenda: "",
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
    ...mapGetters(["getAgendaSelected"]),
    ...mapGetters(["getAppointments"]),
    ...mapGetters(["getRecursiveAppointments"]),
    agendas() {
      return this.getAgendas;
    },
    postponedAppointmentsList() {
      return this.getPostponedAppointments;
    },
    globalAppointmentsList() {
      var indexselectedAgenda = this.agendas.findIndex(
        ag => ag.agendaId === this.agenda
      );
      var agendaAppointments = this.agendas[indexselectedAgenda].appointments;
      return agendaAppointments.filter(
        element => element.agendaId === this.agenda
      );
    }
  },
  methods: {
    ...mapActions([
      "PostponeAppointment",
      "deleteAppointment",
      "deletePostponedAppointment",
      "enableAppointment",
      "updateAgendaSelected",
      "updateAgendaAppointments"
    ]),
    updateAgenda() {
      this.updateAgendaSelected(this.agendaSelected);
    },
    savePostponedAppointment(element) {
      this.PostponeAppointment({
        name: element.name,
        description: element.description
      });
      var index = this.agendas.findIndex(app => app.agendaId === this.agenda);
      var agendaToUpdate = this.agendas[index];
      var newAgendaAppointments = this.globalAppointmentsList.filter(
        aux => aux.name !== element.name
      );
      this.updateAgendaAppointments({
        name: agendaToUpdate.name,
        description: agendaToUpdate.description,
        startHour: agendaToUpdate.startHour,
        endHour: agendaToUpdate.endHour,
        agendaId: this.agendas[index].agendaId,
        appointments: newAgendaAppointments
      });
    },
    EnablePostAppointment(enabledAppointment) {
      if (this._validateData()) {
        if (this._validateDate()) {
          if (this._validateHour()) {
            this.deletePostponedAppointment(enabledAppointment);
            const app = {
              name: enabledAppointment.name,
              description: enabledAppointment.description,
              date: String(this.date),
              startHour: String(this.begin_hour),
              endHour: String(this.end_hour),
              agendaId: this.targetAgenda,
              participants: this.participants
            };
            this.enableAppointment(app);
          } else {
            alert("The hours are wrong, you are gonna break time line");
          }
        } else {
          alert("The date is wrong, you are gonna break time line");
        }
      } else {
        alert("The spaces can not be empty");
      }
    },
    DeletePostAppointment(DeletePostApp) {
      this.deletePostponedAppointment(DeletePostApp);
    },
    _validateHour() {
      var bool = false;
      var endArray = this.end_hour.split(":");
      var beginArray = this.begin_hour.split(":");
      var agendaHour = this.agendas.findIndex(
        ag => ag.agendaId === this.agenda
      );
      var endAgendaArray = this.agendas[agendaHour].endHour.split(":");
      var beginAgendaArray = this.agendas[agendaHour].startHour.split(":");
      if (
        beginArray[0] > beginAgendaArray[0] &&
        endArray[0] < endAgendaArray[0]
      ) {
        if (endArray[0] > beginArray[0]) {
          bool = true;
        } else if (endArray[0] === beginArray[0]) {
          if (endArray[1] > beginArray[0]) {
            bool = true;
          }
        }
      } else if (
        beginArray[0] === beginAgendaArray[0] &&
        endArray[0] === endAgendaArray[0] &&
        beginArray[1] >= beginAgendaArray[1] &&
        endArray[1] <= endAgendaArray[1]
      ) {
        bool = true;
      }
      return bool;
    },
    _validateData() {
      return (
        this.begin_hour !== "" &&
        this.end_hour !== "" &&
        this.date !== "" &&
        this.targetAgenda !== ""
      );
    },
    _validateDate() {
      var bool = false;
      var utc = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "-");
      var utcarray = utc.split("-");
      var datearray = this.date.split("-");
      if (datearray[0] > utcarray[0]) {
        bool = true;
      } else if (utcarray[0] === datearray[0]) {
        if (datearray[1] > utcarray[1]) {
          bool = true;
        } else if (utcarray[1] === datearray[1]) {
          if (datearray[2] > utcarray[2]) {
            bool = true;
          }
        }
      }
      this.date = datearray[1] + "/" + datearray[2] + "/" + datearray[0];
      return bool;
    }
  }
};
</script>
<style src="@/views/SchedulingStyle.css" scoped></style>
