// Ejemplo de como escribir la funcion
const addParticipant = ({ commit }, participant) => {
  commit("mutateParticipantsList", participant);
};
const deleteParticipant = ({ commit }, participantId) => {
  commit("mutationDeletePart", participantId);
};
const addRecursive = ({ commit }, schedule) => {
  commit("mutateAddRecursive", schedule);
};

const updateRecursive = ({ commit }, schedule) => {
  commit("mutateUpdateRecursive", schedule);
};
const deleteRecursive = ({ commit }, schedulename) => {
  commit("mutateDeleteRecursive", schedulename);
};
export default {
  addParticipant,
  deleteParticipant,
  addRecursive,
  updateRecursive,
  deleteRecursive
  // los nombres de las funciones
};
