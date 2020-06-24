// Ejemplo de como escribir la funcion
const getAccounts = state => state.ACCOUNTS;
//const getParticipants = state => state.participants;
const getLastParticipants = state =>
  state.participants[state.participants.length - 1].participantId;

//const getParticipantsId = state => state.participants.
export default {
  getAccounts,
  getLastParticipants
  // los nombres de las funciones
};
