<template>
  <div></div>
</template>

<script>
export default {
  name: "Participants",

  data() {
    return {
      name: "",
      phone: ""
    };
  },

  methods: {
    saveUser() {
      if (this._validateData()) {
        // code
      }
    },
    _validateData() {
      return this.name !== "" && this.phone !== "";
    }
  }
};
</script>
