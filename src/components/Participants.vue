<template>
  <div>
    <label class="title">Participants</label>
    <div class="form">
      <h3 v-if="!formUpdate">New Participant</h3>
      <h3 v-if="formUpdate">Update Participant</h3>
      <div v-if="formUpdate">
        <label for="text">Id:</label>
        <label> {{ idUpdate }}</label>
      </div>
      <div class="left">
        <label for="text">Name:</label>
        <div class="centerI">
          <input
            id="name"
            class="form-control"
            placeholder="Name"
            v-model="name"
            type="text"
          />
        </div>
        <label for="text">Contact:</label>

        <input
          id="contactNumber"
          class="form-control"
          placeholder="Contact"
          v-model="contactNumber"
          type="number"
        />
      </div>
      <br />
      <div class="rigth">
        <br />
        <br />
        <button v-if="!formUpdate" v-on:click="saveNewPart()">Register</button>
        <button
          class="button updateFrom"
          v-if="formUpdate"
          v-on:click="saveUpdate()"
        >
          Update
        </button>
      </div>
      <br />
      <br />
    </div>
    <div v-if="!formUpdate" class="form">
      <h3>Participants</h3>
      <table id="table">
        <thead>
          <th>Code</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Update Participant</th>
          <th>Delete Participant</th>
        </thead>
        <tbody>
          <tr :key="part.participantId" v-for="part in participants">
            <td>{{ part.participantId }}</td>
            <td>{{ part.name }}</td>
            <td>{{ part.contactNumber }}</td>
            <td>
              <button class="button update" @click="updateVisible(part)">
                Update
              </button>
            </td>
            <td>
              <button
                class="button delete"
                @click="deletePart(part.participantId)"
              >
                Delete
              </button>
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
        alert("There don't have to be empty fields");
      }
    },
    updateVisible(part) {
      console.log(part);
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
      var number = getNumber.toString();
      while (number.length < 3) {
        number = "0" + number;
      }
      var newPartId = "PART-" + number;
      return newPartId;
    }
  }
};
</script>
<style src="@/components/styleParticipants.css" scoped></style>
