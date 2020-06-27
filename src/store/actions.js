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
const updateParticipant = ({ commit }, partToUpdate) => {
  commit("mutationUpdatePart", partToUpdate);
};
const updatePartId = ({ commit }, idUpdate) => {
  commit("idToUpdate", idUpdate);
};
export default {
  addAccount,
  addParticipant,
  deleteParticipant,
  updateParticipant,
  updatePartId
  // los nombres de las funciones
};
