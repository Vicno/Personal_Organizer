// Ejemplo de como escribir la funcion
const getRecursiveSchedules = state => state.recursiveAppointments;
const getAgendas = state => state.agendas;
//const getParticipants = state => state.participants;
const getLastParticipant = state =>
  state.participants[state.participants.length - 1].participantId;
const getParticipants = state => state.participants;

//const getParticipantsId = state => state.participants.
export default {
  getRecursiveSchedules,
  getAgendas,
  getLastParticipant,
  getParticipants
  // los nombres de las funciones
};
