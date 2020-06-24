<template>
  <div>
    <input id="name" v-model="name" type="text" />
    <br />
    <br />
    <input id="contactNumber" v-model="contactNumber" type="number" />

    <!--button :@click="_generateCode()">save</button-->
    <button v-on:click="saveNewPart()">Register</button>
    <br />
    <div>
      <br />
      <br />
      <table id="table">
        <thead>
          <th>Code</th>
          <th>Name</th>
          <th>Contact</th>
        </thead>
        <tbody>
          <tr :key="part.participantId" v-for="part in participants">
            <td>{{ part.participantId }}</td>
            <td>{{ part.name }}</td>
            <td>{{ part.contactNumber }}</td>
            <td>
              <button @click="deletePart(part.participantId)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Participants",
  data() {
    return {
      name: "",
      contactNumber: 0
    };
  },
  computed: {
    ...mapGetters(["getLastParticipant"]),
    ...mapGetters(["getParticipants"]),
    getLastId() {
      var id = this.getLastParticipant;
      return id;
    },
    participants() {
      return this.getParticipants;
    }
  },
  methods: {
    ...mapActions(["addParticipant"]),
    ...mapActions(["addParticipant"]),
    ...mapActions(["deleteParticipant"]),
    saveNewPart() {
      if (this._validateData()) {
        this.addParticipant({
          participantId: this._generateNewCode(),
          name: this.name,
          contactNumber: this.contactNumber
        });
        console.log("saved ");
      } else {
        console.log("No saved");
      }
    },
    deletePart(idPart) {
      this.deleteParticipant(idPart);
    },
    _validateData() {
      return this.name !== "" && this.contactNumber !== 0;
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
