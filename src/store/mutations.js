// Ejemplo de como escribir la funcion
const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};
const mutateAppointmentsList = (state, newAppointment) => {
  state.scheduledAppointments.push(newAppointment);
};
const updateAppointment = (state, itemToUpdate) => {
  const foundItem = state.scheduledAppointments.findIndex(
    st => st.name === itemToUpdate.name
  );
  if (foundItem >= 0) {
    state.scheduledAppointments.splice(foundItem, 1, itemToUpdate);
  }
};
const updateAgendaAppointment = (state, itemToUpdate) => {
  const foundItem = state.agendas.findIndex(
    st => st.agendaId === itemToUpdate.agendaId
  );
  if (foundItem >= 0) {
    state.agendas.splice(foundItem, 1, itemToUpdate);
  }
};
const deleteAppointment = (state, itemToDelete) => {
  state.scheduledAppointments = state.scheduledAppointments.filter(
    it => it.name !== itemToDelete
  );
};
export default {
  mutateAccountList,
  mutateAppointmentsList,
  updateAppointment,
  updateAgendaAppointment,
  deleteAppointment
  // los nombres de las funciones
};
