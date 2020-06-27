// Ejemplo de como escribir la funcion
const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};
const mutateTargetAgendaAppointment = (state, newAppointment) => {
  state.agendas.forEach(element => {
    if (element.agendaId === newAppointment.agendaId) {
      element.appointments.push(newAppointment);
    }
  });
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
const mutateDeleteAppointment = (state, AppToDelete) => {
  state.agendas.forEach(element => {
    if (element.agendaId === AppToDelete.agendaId) {
      element.appointments.filter(element => element.name !== AppToDelete.name);
    }
  });
};

export default {
  mutateAccountList,
  mutateTargetAgendaAppointment,
  updateAppointment,
  mutatePostponeAppointment,
  mutateDeleteAppointment
  // los nombres de las funciones
};
