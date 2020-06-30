<template>
  <div class="contenedor">
        <v-btn icon router :to="'/Agenda'">
          <img alt="Vue logo" src="../assets/agenda.png" />
          <label>New Agenda</label>
        </v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    //
  })
};
</script>
<style scoped>
.contenedor{
  height: 90%;
  width: 40%;
  padding-left: 45%;
  padding-top: 20%;
}
label{
  font-size: 50px;
  white-space: nowrap;
}
</style>
