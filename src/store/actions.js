// Ejemplo de como escribir la funcion
const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};
const addParticipant = ({ commit }, participant) => {
  commit("mutateParticipantsList", participant);
};
const deleteParticipant = ({ commit }, participantId) => {
  commit("mutationDeletePart", participantId);
};
export default {
  addAccount,
  addParticipant,
  deleteParticipant
  // los nombres de las funciones
};
