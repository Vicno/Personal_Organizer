// Ejemplo de como escribir la funcion
/*const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};*/

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
      index = state.agendas.indexOf(agenda);

      if (index > -1) {
        state.agendas.splice(index, 1);
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
const updateAgendaSelected = (state, itemToUpdate) => {
  state.agendaSelected = itemToUpdate;
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
  var appointmentToDelete = (state.scheduledAppointments = state.scheduledAppointments.filter(
    it => it.name === itemToDelete
  ));
  var today = new Date();
  ("06/18/2020");
  var date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  if (appointmentToDelete.date === date) {
    state.postponedAppointments.push({
      name: appointmentToDelete.name,
      description: appointmentToDelete.description
    });
  }
  state.scheduledAppointments = state.scheduledAppointments.filter(
    it => it.name !== itemToDelete
  );
};
export default {
  mutateCreateAgenda,
  mutateUpdateAgenda,
  mutateDeleteAgenda,
  mutateAccountList,
  mutateAppointmentsList,
  updateAppointment,
  updateAgendaAppointment,
  deleteAppointment,
  updateAgendaSelected
  // los nombres de las funciones
};
