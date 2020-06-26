<template>
  <div>
    <label class="title">Create New Agenda</label>
    <div id="CreateInterface" class="cred">
      <div class="cred" style="background-color: whitesmoke;">
        <div :key="agenda.agendaId" v-for="agenda in agendas">
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
              <div></div>
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
      nombre: "",
      descripcion: "",
      startHora: "",
      endHora: "",
      removeId: "",
    };
  },
  computed: {
    ...mapGetters(["getAgendas"]),
    // getList,
    agendas() {
      return this.getAgendas;
    },
  },
  methods: {
    ...mapActions(["createNewAgenda", "deleteAgenda", "updateAgenda"]),

    create() {
      this.createNewAgenda({
        agendaId: this.agendaID,
        name: this.nombre,
        description: this.descripcion,
        startHour: this.endHora,
        endHour: this.startHora,
        appointments: [],
      });
    },
    update() {
      this.updateAgenda({
        agendaid: this.agendaID,
        name: this.nombre,
        description: this.descripcion,
        startHour: this.endHora,
        endHour: this.startHora,
      });
    },
    delete() {
      this.deleteAgenda(this.removeId);
    },
    verifyFields() {
      let correct = false;
      if (this.agendaID !== "") {
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
      } else {
        alert("Missing ID");
      }
      return correct;
    },
    verifyHora(SH, EH) {
      let HoraS = SH.split(":");
      let HoraE = EH.split(":");
      if (parseInt(HoraS[0]) <= parseInt(HoraE[0])) {
        if (parseInt(HoraS[1]) < parseInt(HoraE[1])) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>
<style src="@/views/Agenda.css"></style>
