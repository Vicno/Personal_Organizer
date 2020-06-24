// Ejemplo de como escribir la funcion
const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};
const addParticipant = ({ commit }, participant) => {
  commit("mutateParticipantsList", participant);
};
export default {
  addAccount,
  addParticipant
  // los nombres de las funciones
};
