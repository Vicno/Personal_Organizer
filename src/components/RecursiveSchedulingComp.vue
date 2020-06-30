<template>
  <div class="wrapper">
    <div class="inner">
      <div class="image-holder">
        <img src="@/assets/Imagen_Registro.jpg" />
      </div>
      <div class="form">
        <h3>Make A Recursive Appointment</h3>
        <!--Name-->
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="name"
        />
        <!--description-->
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          class="form-control"
          v-model="description"
          style="height: 130px;"
        ></textarea>
        <!--Agenda-->
        <div class="form-row">
          <span class="form-control"> Agenda </span>
          <select v-model="agenda">
            <option v-for="(ag, index) in agendas" :key="index">
              {{ ag.name }}
            </option>
          </select>
        </div>
        <!--Begin Hour-->
        <div class="form-row">
          <span class="form-control"> Begin Hour </span>
          <input
            type="time"
            id="begin_hour"
            name="begin_hour"
            v-model="begin_hour"
            required
          />
        </div>
        <!--End Hour-->
        <div class="form-row">
          <span class="form-control"> End Hour </span>
          <input
            type="time"
            id="end_hour"
            name="end_hour"
            v-model="end_hour"
            required
          />
        </div>
        <br />
        <!--Begin Date-->
        <div class="form-row">
          <span class="form-control"> Begin Date </span>
          <input type="date" id="dateP" name="dateBegin" v-model="date" />
        </div>
        <!--End Date-->
        <div class="form-row">
          <span class="form-control"> End Date </span>
          <input type="date" id="dateP" name="dateEnd" v-model="endDate" />
        </div>
        <!--Frequency-->
        <div class="form-row">
          <span class="form-control"> Frequency </span>
          <select v-model="frequency">
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>
        </div>
        <!---->
        <!--Participants-->
        <v-select
          v-model="participants"
          :items="allParticipantsName()"
          label="Select"
          multiple
          chips
          hint="Participants"
          persistent-hint
        ></v-select>
        <!--Create Button-->
        <button @click="create">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecursiveSchedulingComponent",
  data() {
    return {
      name: "",
      description: "",
      date: "",
      endDate: "",
      frequency: "",
      begin_hour: "",
      end_hour: "",
      agenda: "", //agenda id
      participants: []
    };
  },
  methods: {
    ...mapActions(["addRecursive", "addAppointmentToAgenda"]),
    allParticipantsName() {
      var participantName = [];
      for (var i = 0; i < this.allParticipants.length; i++) {
        participantName.push(this.allParticipants[i].name);
      }
      return participantName;
    },
    create() {
      if (this._validateData()) {
        if (this._validateDate()) {
          if (this._validateHour()) {
            this.addRecursive({
              name: this.name,
              description: this.description,
              date: String(this.date),
              endDate: String(this.endDate),
              frequency: this.frequency,
              startHour: String(this.begin_hour),
              endHour: String(this.end_hour),
              agendaId: this.agenda,
              participants: this.participants
            });
            this.addAppointmentToAgenda({
              name: this.name,
              description: this.description,
              date: String(this.date),
              endDate: String(this.endDate),
              frequency: this.frequency,
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
      // Can't have two Recursive Schedules with same name in same agenda
      let recursiveScheduleWithSameNameInAgenda = this.recursiveAppointments.filter(
        item =>
          item.agendaId === this.agendaIdfromAgendaname &&
          item.name === this.name
      );
      const isUnique =
        recursiveScheduleWithSameNameInAgenda.length === 0 ? true : false;
      // Can't exist null data
      return (
        this.name !== "" &&
        this.description !== "" &&
        this.date !== "" &&
        this.endDate !== "" &&
        this.frequency !== "" &&
        this.end_hour !== "" &&
        this.begin_hour !== "" &&
        this.agenda !== "" &&
        isUnique
      );
    },
    _validateHour() {
      this._getAgendaId();
      var bool = false;
      // Gets hour data from recursive we want to create
      var endArray = this.end_hour.split(":");
      var beginArray = this.begin_hour.split(":");
      // Gets hour data from agenda
      var agendaHour = this.agendas.findIndex(
        ag => ag.agendaId === this.agenda
      );
      var endAgendaArray = this.agendas[agendaHour].endHour.split(":");
      var beginAgendaArray = this.agendas[agendaHour].startHour.split(":");
      // hours must be in range
      if (
        parseInt(beginArray[0]) > parseInt(beginAgendaArray[0]) &&
        parseInt(endArray[0]) < parseInt(endAgendaArray[0])
      ) {
        // compares hours begin must be less than end
        if (parseInt(endArray[0]) > parseInt(beginArray[0])) {
          bool = true;
        } else if (parseInt(endArray[0]) === parseInt(beginArray[0])) {
          // if hours are equal, minutes must not
          if (parseInt(endArray[1]) > parseInt(beginArray[1])) {
            bool = true;
          }
        }
      } else if (
        // if same as range in hours, minutes must be in range
        parseInt(beginArray[0]) === parseInt(beginAgendaArray[0]) &&
        parseInt(endArray[0]) === parseInt(endAgendaArray[0]) &&
        parseInt(beginArray[1]) >= parseInt(beginAgendaArray[1]) &&
        parseInt(endArray[1]) <= parseInt(endAgendaArray[1])
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
      //si el año inicial es mayor al de hoy
      if (datearray[0] > utcarray[0]) {
        bool = true;
      } else if (utcarray[0] === datearray[0]) {
        //si no, el mes inicial es mayor al de hoy
        if (datearray[1] > utcarray[1]) {
          bool = true;
        } else if (utcarray[1] === datearray[1]) {
          //si no, el dia inicial es mayor al de hoy
          if (datearray[2] >= utcarray[2]) {
            bool = true;
          }
        }
      }
      this.date = datearray[1] + "/" + datearray[2] + "/" + datearray[0];

      var endDatearray = this.endDate.split("-");
      //si el año del final es mayor al inicial
      if (endDatearray[0] > datearray[0]) {
        bool = true;
      } else if (endDatearray[0] === datearray[0]) {
        //si no, el mes del final es mayor al inicial
        if (datearray[1] > endDatearray[1]) {
          bool = true;
        } else if (endDatearray[1] === datearray[1]) {
          //si no, el dia del final es mayor al inicial
          if (endDatearray[2] > datearray[2]) {
            bool = true;
          }
        }
      }
      this.endDate =
        endDatearray[2] + "/" + endDatearray[1] + "/" + endDatearray[0];
      return bool;
    },
    _getAgendaId() {
      //modify agenda name for agenda id
      var index = this.agendas.findIndex(ag => ag.name === this.agenda);
      this.agenda = this.agendas[index].agendaId;
    }
  },
  computed: {
    ...mapGetters([
      "getrecursiveAppointments",
      "getAgendas",
      "getParticipants"
    ]),

    allParticipants() {
      return this.getParticipants;
    },
    agendas() {
      return this.getAgendas;
    },
    recursiveAppointments() {
      return this.getrecursiveAppointments;
    },
    agendafromAgendaname() {
      // Si existe una agenda con el nombre, se devuelve el id de esa agenda
      let agenda = this.agendas.filter(item => item.name === this.agenda);
      return agenda[0];
    }
  }
};
</script>
<style src="@/views/RecursiveSchedulingStyle.css" scoped></style>
