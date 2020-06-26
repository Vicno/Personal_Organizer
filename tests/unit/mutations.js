
const mutateCreateAgenda = (state, newAgenda) => {
  state.agendas.push(newAgenda);
};

const mutateUpdateAgenda = (state, updateAgenda) => {
  state.agendas.forEach(agenda => {
    if (agenda.agendaId === updateAgenda.agendaId) {
      agenda.name = updateAgenda.name;
      agenda.description = updateAgenda.description;
      agenda.startHour = updateAgenda.startHour;
      agenda.endHour = updateAgenda.endHour;
    }
  });
};

const mutateDeleteAgenda = (state, id) => {
  let index;
  state.agendas.forEach(agenda => {
    if (agenda.agendaId === id) {
      index = state.agendas.indexOf(id);
      if (index > -1) {
        this.state.agendas.splice(index, 1);
      }
    }
  });
};

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
export default {
  mutateCreateAgenda,
  mutateUpdateAgenda,
  mutateDeleteAgenda,
  mutateAccountList,
  mutateAppointmentsList,
  updateAppointment
  // los nombres de las funciones
};
