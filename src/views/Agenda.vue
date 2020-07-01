<template>
  <div>
    <label class="title">Create New Agenda</label>
    <div class="form">
      <h3>Make An Agenda</h3>
      <div class="form-row">
        <input
          type="text"
          class="form-control"
          placeholder="nombre"
          id="nombre"
          v-model="nombre"
        />
      </div>
      <div class="form-row">
        <input
          type="time"
          id="startHora"
          name="startHora"
          v-model="startHora"
          required
        />
        <small class="timebegin">Begin Hour</small>
        <input
          type="time"
          id="endHora"
          name="endHora"
          v-model="endHora"
          required
        />
        <small>End Hour</small>
      </div>
      <textarea
        name="descripcion"
        id="descricion"
        placeholder="Description"
        class="form-control"
        style="height: 80%;  width: 90%;"
        v-model="descripcion"
      ></textarea>
      <button @click="create">Create New Agenda</button>
    </div>
    <div id="myDIV" class="cred" style="display: none;">
      <label class="title"> Updating Agenda : {{ this.agendaID2 }}</label>
      <div class="form-row">
        <input
          type="text"
          id="nombre2"
          class="form-control"
          placeholder="nombre"
          v-model="nombre2"
        />
      </div>
      <div class="form-row">
        <input
          type="time"
          id="startHora2"
          name="startHora"
          v-model="startHora2"
          required
        />
        <small class="timebegin">Begin Hour</small>
        <input
          type="time"
          id="endHora2"
          name="endHora"
          v-model="endHora2"
          required
        />
        <small>End Hour</small>
      </div>
      <textarea
        name="descripcion"
        id="descricion2"
        placeholder="Description"
        class="form-control"
        style="height: 80%;  width: 90%;"
        v-model="descripcion2"
      ></textarea>
      <button @click="update()">Confirm Update</button>
    </div>
    <br />
    <label class="title">Agendas</label>
    <div id="CreateInterface" class="cred">
      <div>
        <div class="cred" :key="agenda.agendaId" v-for="agenda in agendas">
          <ul>
            <div>
              <label class="title">{{ agenda.agendaId }}</label>
              <br />
              Name : {{ agenda.name }}
              <br />
              Description:
              {{ agenda.description }}
              <div class="cred">Start Hour : {{ agenda.startHour }}</div>
              <div class="cred">End Hour : {{ agenda.endHour }}</div>
              <div>
                Number of appointments: {{ agenda.appointments.length }}
              </div>
              <button @click="myFunction(agenda.agendaId)">Edit Agenda</button>
              <button @click="borrarAgenda(agenda.agendaId)">
                Delete Agenda
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "User",

  data() {
    return {
      agendaID: "",
      agendaID2: "",
      nombre: "",
      descripcion: "",
      startHora: "",
      endHora: "",
      nombre2: "",
      descripcion2: "",
      startHora2: "",
      endHora2: "",
      removeId: "",
      appointmentId: ""
    };
  },
  methods: {
    ...mapActions(["createNewAgenda", "deleteAgenda", "updateAgenda"]),

    create() {
      if (this.verifyFields()) {
        this.createNewAgenda({
          agendaId: this.getId(),
          name: this.nombre,
          description: this.descripcion,
          startHour: this.startHora,
          endHour: this.endHora,
          appointments: []
        });
        this.name = "";
        this.descripcion = "";
        this.startHora = "";
        this.endHora = "";
      }
    },
    update() {
      if (this.verifyFields2()) {
        let newval = {
          agendaId: this.agendaID2,
          name: this.nombre2,
          description: this.descripcion2,
          startHour: this.startHora2,
          endHour: this.endHora2
        };
        this.updateAgenda(newval);
      }
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    delete() {
      this.deleteAgenda(this.removeId);
    },
    borrarAgenda(id) {
      this.agendas.forEach(agenda => {
        if (agenda.agendaId === id) {
          if (agenda.appointments.length === 0) {
            this.removeId = id;
            this.delete();
          }
        }
      });
    },
    verifyFields() {
      let correct = false;

      if (this.nombre !== "") {
        if (this.descripcion !== "") {
          if (this.startHora !== "") {
            if (this.endHora !== "") {
              if (this.verifyHora(this.startHora, this.endHora)) {
                correct = true;
              }
            } else {
              alert("End Hour not defined");
            }
          } else {
            alert("Start Hour not defined");
          }
        } else {
          alert("Missing Description");
        }
      } else {
        alert("Missing Name");
      }

      return correct;
    },
    verifyFields2() {
      let correct = false;

      if (this.nombre2 !== "") {
        if (this.descripcion2 !== "") {
          if (this.startHora2 !== "") {
            if (this.endHora2 !== "") {
              if (this.verifyHora(this.startHora2, this.endHora2)) {
                correct = true;
              }
            } else {
              alert("End Hour not defined");
            }
          } else {
            alert("Start Hour not defined");
          }
        } else {
          alert("Missing Description");
        }
      } else {
        alert("Missing Name");
      }

      return correct;
    },
    verifyHora(SH, EH) {
      let HoraS = SH.split(":");
      let HoraE = EH.split(":");
      if (parseInt(HoraS[0]) < parseInt(HoraE[0])) {
        return true;
      } else if (parseInt(HoraS[1]) < parseInt(HoraE[1])) {
        return true;
      } else {
        alert("Start hour is bigger");
      }
      return false;
    },
    getId() {
      let lastID = this.lastId;
      let id;
      let sol;
      if (lastID == null) {
        id = "ANG-0001";
      } else {
        let conv = lastID.split("-");
        id = parseInt(conv[1]) + 1;
        sol = id.toString();
        while (sol.length < 4) {
          sol = "0" + sol;
        }
        sol = "ANG-" + sol;
      }
      return sol;
    },
    myFunction(id) {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      this.agendaID2 = id;
    }
  },
  computed: {
    ...mapGetters(["getAgendas", "getAppointments"]),
    // getList,
    agendas() {
      return this.getAgendas;
    },
    lastId() {
      return this.agendas[this.agendas.length - 1].agendaId;
    }
  }
};
</script>
<style src="@/views/Agenda.css" scoped></style>
