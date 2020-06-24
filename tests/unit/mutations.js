// Ejemplo de como escribir la funcion
const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};
const mutateParticipantsList = (state, newParticipant) => {
  state.participants.push(newParticipant);
};
export default {
  mutateAccountList,
  mutateParticipantsList
  // los nombres de las funciones
};
