<template>
  <div class="wrapper">
    <div class="inner">
      <div class="image-holder">
        <img src="@/assets/Imagen_Registro.jpg" />
      </div>
      <div class="form">
        <h3>Make An Appointment</h3>
        <div class="form-row">
          <input type="text" class="form-control" placeholder="Name" />
          <select id="agendas">
            <option :key="ag.id" v-for="ag in agenda" class="optionsAgenda">
              {{ ag.name }}
            </option>
          </select>
        </div>
        <div class="form-row">
          <input type="text" class="form-control" placeholder="Begin Hour" />
          <input type="text" class="form-control" placeholder="End Hour" />
        </div>
        <div class="form-row">
          <input type="date" id="dateP" name="dateP" />
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
export default {
  name: "SchedulingComponent",
  data() {
    return {
      name: "",
      description: "",
      end_hour: "",
      begin_hour: "",
      date: "",
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
        this.end_hour !== "" &&
        this.begin_hour !== "" &&
        this.date !== "" &&
        this.agenda !== ""
      );
    },
    _validateHour() {
      return this.begin_hour === "11:00" && this.end_hour === "12:00";
    },
    _validateDate() {
      return this.date === "2020-05-10";
    }
  }
};
</script>
<style src="@/views/SchedulingStyle.css" scoped></style>
