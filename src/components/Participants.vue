<template>
  <div>
    <div>
      <tipo_lista>
        <li>Primer elemento</li>
        <li>Segundo elemento</li></tipo_lista
      >
    </div>
    <div v-if="formUpdate">
      <label> {{ idUpdate }}</label>
    </div>
    <input id="name" v-model="name" type="text" />
    <br />
    <br />
    <input id="contactNumber" v-model="contactNumber" type="number" />

    <!--button :@click="_generateCode()">save</button-->
    <button v-if="!formUpdate" v-on:click="saveNewPart()">Register</button>
    <button v-if="formUpdate" v-on:click="saveUpdate()">Updateee</button>

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
            <td>
              <button @click="updateVisible(part)">Update</button>
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
      contactNumber: "",
      formUpdate: false
    };
  },
  computed: {
    ...mapGetters(["getLastParticipant"]),
    ...mapGetters(["getParticipants"]),
    ...mapGetters(["getUpdateIdPart"]),
    getLastId() {
      var id = this.getLastParticipant;
      return id;
    },
    participants() {
      return this.getParticipants;
    },
    idUpdate() {
      return this.getUpdateIdPart;
    }
  },
  methods: {
    ...mapActions(["addParticipant"]),
    ...mapActions(["updateParticipant"]),
    ...mapActions(["deleteParticipant"]),
    ...mapActions(["updatePartId"]),
    saveNewPart() {
      if (this._validateData()) {
        this.addParticipant({
          participantId: this._generateNewCode(),
          name: this.name,
          contactNumber: this.contactNumber
        });
        this.name = "";
        this.contactNumber = "";
        console.log("saved ");
      } else {
        console.log("No saved");
      }
    },
    updateVisible(part) {
      this.formUpdate = true;
      this.name = part.name;
      this.contactNumber = part.contactNumber;
      this.updatePartId(part.participantId);
    },
    saveUpdate() {
      if (this._validateData()) {
        this.updateParticipant({
          participantId: this.idUpdate,
          name: this.name,
          contactNumber: this.contactNumber
        });
        this.formUpdate = false;
        this.name = "";
        this.contactNumber = "";
      }
    },
    deletePart(idPart) {
      this.deleteParticipant(idPart);
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
