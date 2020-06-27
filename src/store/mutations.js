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
const mutationUpdatePart = (state, partToUpdate) => {
  let foundAccountIndex = state.participants.findIndex(
    account => account.participantId === partToUpdate.participantId
  );
  state.participants.splice(foundAccountIndex, 1, partToUpdate);
};
const idToUpdate = (state, idToUpdate) => {
  state.partIdToUpdate = idToUpdate;
};
export default {
  mutateAccountList,
  mutateParticipantsList,
  mutationDeletePart,
  mutationUpdatePart,
  idToUpdate
  // los nombres de las funciones
};
