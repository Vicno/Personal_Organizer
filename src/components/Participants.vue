<template>
  <div>
    <label for="text">log</label>
    <!--button :@click="_generateCode()">save</button-->
    <button v-on:click="_generateNewCode()">Register</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Participants",
  data() {
    return {
      name: "",
      contactNumber: ""
    };
  },
  computed: {
    ...mapGetters(["getLastParticipants"]),
    getLastId() {
      var id = this.getLastParticipants;
      return id;
    }
  },
  methods: {
    ...mapActions(["addParticipant"]),
    saveNewPart() {
      if (this._validateData()) {
        //code
      }
    },
    _validateData() {
      return this.name !== "" && this.contactNumber !== "";
    },
    _generateNewCode() {
      var fracmentId = this.getLastId.split("-");
      var getNumber = parseInt(fracmentId[1]) + 1;
      var newPartId = "PART-" + getNumber;
      return newPartId;
    }
  }
};
</script>
