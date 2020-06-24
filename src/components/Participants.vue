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
      return "PART-1"
    }
  },
  methods: {
    saveNewPart() {
      if (this._validateData()) {
        //code
      }
    },
    _validateData() {
      return this.name !== "" && this.contactNumber !== "";
    },
    _generateNewCode() {
      return "PART-2"
    }
  }
};
</script>
