// Ejemplo de como escribir la funcion
const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};
const mutateParticipantsList = (state, newParticipant) => {
  state.participants.push(newParticipant);
};
const mutationDeletePart = (state, partToDelete) => {
  state.participants = state.participants.filter(
    part => part.participantId !== partToDelete
  );
};
export default {
  mutateAccountList,
  mutateParticipantsList,
  mutationDeletePart
  // los nombres de las funciones
};
