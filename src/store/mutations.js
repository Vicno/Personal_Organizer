// Ejemplo de como escribir la funcion
const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};
const updateAppointment = (state, itemToUpdate) => {
  const foundItem = state.scheduledAppointments.findIndex(
    st => st.name === itemToUpdate.name
  );
  if (foundItem >= 0) {
    state.scheduledAppointments.splice(foundItem, 1, itemToUpdate);
  }
};
const mutatePostponeAppointment = (state, PostAppointment) => {
  state.postponedAppointments.push(PostAppointment);
};
const mutateDeletePostponedAppointment = (state, PostAppointment) => {
  state.postponedAppointments = state.postponedAppointments.filter(
    element => element.name !== PostAppointment.name
  );
};
const updateAgendaSelected = (state, itemToUpdate) => {
  state.agendaSelected = itemToUpdate;
};
const mutateEnableAppointment = (state, newAppointment) => {
  state.agendas.forEach(element => {
    if (element.agendaId === newAppointment.agendaId) {
      element.appointments.push(newAppointment);
    }
  });
};
const updateAgendaAppointment = (state, itemToUpdate) => {
  const foundItem = state.agendas.findIndex(
    st => st.agendaId === itemToUpdate.agendaId
  );
  if (foundItem >= 0) {
    state.agendas.splice(foundItem, 1, itemToUpdate);
  }
};
export default {
  mutateAccountList,
  mutateEnableAppointment,
  updateAppointment,
  mutatePostponeAppointment,
  updateAgendaSelected,
  mutateDeletePostponedAppointment,
  updateAgendaAppointment
  // los nombres de las funciones
};
