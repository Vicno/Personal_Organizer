// Ejemplo de como escribir la funcion
const mutateParticipantsList = (state, newParticipant) => {
  state.participants.push(newParticipant);
};

const mutationDeletePart = (state, partToDelete) => {
  state.participants = state.participants.filter(
    part => part.participantId !== partToDelete
  );
};

const mutateAddRecursive = (state, newSchedule) => {
  state.recursiveAppointments.push(newSchedule);
};

const mutateUpdateRecursive = (state, updateSchedule) => {
  const indexSchedule = state.recursiveAppointments.findIndex(
    rt => rt.name === updateSchedule.name
  );
  if (indexSchedule > -1) {
    state.recursiveAppointments.splice(indexSchedule, 1, updateSchedule);
  }
};

const mutateDeleteRecursive = (state, name) => {
  let index;
  state.recursiveAppointments.forEach(schedule => {
    if (schedule.name === name) {
      index = state.recursiveAppointments.indexOf(schedule);
      console.log(index);
      if (index > -1) {
        state.agendas.splice(index, 1);
      }
    }
  });
};
export default {
  mutateParticipantsList,
  mutationDeletePart,
  mutateAddRecursive,
  mutateUpdateRecursive,
  mutateDeleteRecursive
  // los nombres de las funciones
};
