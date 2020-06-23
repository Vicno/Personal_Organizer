<template>
  <div>
    <label for="text">Hi</label>
    <Participants>Register</Participants>
  </div>
</template>

<script>
// @ is an alias to /src
import Participants from "@/components/Participants.vue";

export default {
  name: "ParticipantsView",
  components: {
    Participants
  }
};
</script>
