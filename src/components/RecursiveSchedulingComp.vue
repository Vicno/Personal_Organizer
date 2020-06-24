<template>
  <div class="wrapper">
    <div class="inner">
      <div class="form">
        <h3>Make A Recursive Appointment</h3>
        <div class="form-row">
          <input type="text" class="form-control" placeholder="Name" />
          <!--
          <select class="form-control" v-model="agenda.name">
            <option v-for="(account, index) in accounts" :key="index">
              {{ account.accountName }}
            </option>
          </select>
          -->
        </div>
        <div class="form-row">
          <input
            type="text"
            class="form-control"
            placeholder="Begin Hour hh/mm"
          />
          <input
            type="text"
            class="form-control"
            placeholder="End Hour hh/mm"
          />
        </div>
        <div class="form-row">
          <span class="form-control"> Begin Date </span>
          <input type="date" id="dateP" name="dateBegin" />
        </div>
        <div class="form-row">
          <span class="form-control"> End Date </span>
          <input type="date" id="dateP" name="dateEnd" />
        </div>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          class="form-control"
          style="height: 130px;"
        ></textarea>
        <button>Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
      agenda: "",
      participants: {}
    };
  },
  methods: {
    saveApointment() {
      if (this._validateData()) {
        if (this._validateDate()) {
          if (this._validateHour()) {
            // code
          }
        }
      }
    },
    _validateData() {
      return (
        this.name !== "" &&
        this.description !== "" &&
        this.date !== "" &&
        this.endDate !== "" &&
        this.frequency !== "" &&
        this.end_hour !== "" &&
        this.begin_hour !== "" &&
        this.agenda !== ""
      );
    },
    _validateHour() {
      try {
        return this.begin_hour === "11:00" && this.end_hour === "12:00";
      } catch (error) {
        alert("Must enter a valid option");
      }
    },
    _validateDate() {
      return this.date === "2020-05-10" && this.endDate === "2020-06-10";
    }
  },
  computed: {
    ...mapGetters(["getAgendaList", "getParticipantList"]),

    agendas() {
      return this.getAccountList;
    },
    participantes() {
      return this.getCategoryList;
    }
  }
};
</script>
<style src="@/views/SchedulingStyle.css" scoped>
span.form-control {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
