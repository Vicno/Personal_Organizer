// Ejemplo de como escribir la funcion
const getAccounts = state => state.ACCOUNTS;
//const getParticipants = state => state.participants;
const getLastParticipant = state =>
  state.participants[state.participants.length - 1].participantId;
const getParticipants = state => state.participants;
//const getParticipantsId = state => state.participants.
export default {
  getAccounts,
  getLastParticipant,
  getParticipants
  // los nombres de las funciones
};
