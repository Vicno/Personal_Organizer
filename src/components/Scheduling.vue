<template>
  <div></div>
</template>

<script>
export default {
  name: "Scheduling",
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
