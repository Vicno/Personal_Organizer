<template>
  <div class="wrapper">
    <div class="inner">
      <div class="image-holder">
        <img src="@/assets/Imagen_Registro.jpg" />
      </div>
      <div class="form">
        <h3>Make An Appointment</h3>
        <div class="form-row">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="name"
          />
          <label>Agenda</label>
          <select v-model="agenda" id="agendas">
            <option :key="ag.id" v-for="ag in agendas" class="optionsAgenda">
              {{ ag.name }}
            </option>
          </select>
        </div>
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
        <div class="form-row">
          <input v-model="date" type="date" id="dateP" name="dateP" />
        </div>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          class="form-control"
          style="height: 130px;"
          v-model="description"
        ></textarea>
        <button @click="saveApointment">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SchedulingComponent",
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
    agendas() {
      return this.getAgendas;
    }
  },
  methods: {
    ...mapActions(["addAppointment"]),
    saveApointment() {
      if (this._validateData()) {
        if (this._validateDate()) {
          if (this._validateHour()) {
            this.addAppointment({
              name: this.name,
              description: this.description,
              date: String(this.date),
              startHour: String(this.begin_hour),
              endHour: String(this.end_hour),
              agendaId: this.agenda,
              participants: this.participants
            });
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
    _validateData() {
      return (
        this.name !== "" &&
        this.description !== "" &&
        this.date !== "" &&
        this.agenda !== ""
      );
    },
    _validateHour() {
      this._getAgendaId();
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
      this.date = this.date.replace(/-/g, "/");
      return bool;
    },
    _getAgendaId() {
      var index = this.agendas.findIndex(ag => ag.name === this.agenda);
      this.agenda = this.agendas[index].agendaId;
    }
  }
};
</script>
<style src="@/views/SchedulingStyle.css" scoped></style>
