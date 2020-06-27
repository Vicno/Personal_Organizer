<template>
  <v-app>
    <v-app-bar app color="#gggg   " dark>
      <v-spacer></v-spacer>
      <v-btn icon router :to="'/schedul'">
        <v-icon>mdi-book-plus</v-icon>
        <span class="mr-2">Book new Appointment</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon router :to="'/schedul'">
        <v-icon>mdi-book-plus-multiple</v-icon>
        <span class="mr-2">Book new Recurrent Appointment</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon router :to="'/calendar'">
        <v-icon>mdi-calendar-month</v-icon>
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
