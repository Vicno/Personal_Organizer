<template>
  <div></div>
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
    ...mapGetters(["getCategoryList"]),
    // getList,
    categories() {
      return this.getCategoryList;
    },
  },
  methods: {
    ...mapActions("createAgenda"),
    ...mapActions("deleteAgenda"),
    ...mapActions("updateAgenda"),
    createNewAgenda() {
      this.createAgenda({
        agendaId: this.agendaID,
        name: this.nombre,
        description: this.descripcion,
        startHour: this.endHora,
        endHour: this.startHora,
      });
    },
    modifyAgenda() {
      this.updateAgenda({
        agendaid: this.agendaID,
        name: this.nombre,
        description: this.descripcion,
        startHour: this.endHora,
        endHour: this.startHora,
      });
    },
    removeAgenda() {
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
