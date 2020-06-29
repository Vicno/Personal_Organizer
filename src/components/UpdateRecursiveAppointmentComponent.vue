<template>
  <div class="wrapper">
    <div class="inner">
      <div class="image-holder">
        <img src="@/assets/Imagen_Registro.jpg" />
      </div>
      <div class="form">
        <h3>Make A Recursive Appointment</h3>
        <!--Name-->
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="name"
        />
        <!--description-->
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          class="form-control"
          v-model="description"
          style="height: 130px;"
        ></textarea>
        <!--Agenda-->
        <div class="form-row">
          <span class="form-control"> Agenda </span>
          <select v-model="agenda">
            <option v-for="(ag, index) in agendas" :key="index">
              {{ ag.name }}
            </option>
          </select>
        </div>
        <!--Begin Hour-->
        <div class="form-row">
          <span class="form-control"> Begin Hour </span>
          <input
            type="time"
            id="begin_hour"
            name="begin_hour"
            v-model="begin_hour"
            required
          />
        </div>
        <!--End Hour-->
        <div class="form-row">
          <span class="form-control"> End Hour </span>
          <input
            type="time"
            id="end_hour"
            name="end_hour"
            v-model="end_hour"
            required
          />
        </div>
        <br />
        <!--Begin Date-->
        <div class="form-row">
          <span class="form-control"> Begin Date </span>
          <input type="date" id="dateP" name="dateBegin" v-model="date" />
        </div>
        <!--End Date-->
        <div class="form-row">
          <span class="form-control"> End Date </span>
          <input type="date" id="dateP" name="dateEnd" v-model="endDate" />
        </div>
        <!--Frequency-->
        <div class="form-row">
          <span class="form-control"> Frequency </span>
          <select v-model="frequency">
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>
        </div>
        <!---->
        <!--Participants-->
        <div class="form-row">
          <span class="form-control"> Participants </span>
          <select v-model="participants">
            <option v-for="(par, index) in participantes" :key="index">
              {{ par.name }}
            </option>
          </select>
        </div>
        <!--Create Button-->
        <button @click="create">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "vuex";
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
      agenda: "", //agenda id
      participants: {}
    };
  },
  methods: {}
};
</script>
