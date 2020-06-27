<template>
  <v-app>
    <v-app-bar app color="#gggg   " dark>
      <v-spacer></v-spacer>
      <v-btn router :to="'/calendar'">
        <span class="mr-2">Calendar</span>
      </v-btn>
      <v-btn router :to="'/schedul'">
        <span class="mr-2">Scheduling</span>
      </v-btn>
      <v-btn router :to="'/updateAppoint'">
        <span class="mr-2">UpdateAppointment</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";
export default {
  name: "App",
  router,
  components: {},

  data: () => ({
    //
  })
};
</script>
