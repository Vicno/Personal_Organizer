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
const mutateParticipantsList = (state, newParticipant) => {
  state.participants.push(newParticipant);
};

const mutationDeletePart = (state, partToDelete) => {
  state.participants = state.participants.filter(
    part => part.participantId !== partToDelete
  );
};

const mutateUpdateRecursive = (state, updateSchedule) => {
  const indexSchedule = state.recursiveAppointments.findIndex(
    rt => rt.name === updateSchedule.name
  );
  if (indexSchedule > -1) {
    state.recursiveAppointments.splice(indexSchedule, 1, updateSchedule);
  }
};

const mutateDeleteRecursive = (state, name) => {
  let index;
  state.recursiveAppointments.forEach(schedule => {
    if (schedule.name === name) {
      index = state.recursiveAppointments.indexOf(schedule);
      if (index > -1) {
        state.recursiveAppointments.splice(index, 1);
      }
    }
  });
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
  //("06/18/2020");
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
const mutationUpdatePart = (state, partToUpdate) => {
  let foundAccountIndex = state.participants.findIndex(
    account => account.participantId === partToUpdate.participantId
  );
  state.participants.splice(foundAccountIndex, 1, partToUpdate);
};
const idToUpdate = (state, idToUpdate) => {
  state.partIdToUpdate = idToUpdate;
};
const mutateAddRecursive = (state, newSchedule) => {
  state.recursiveAppointments.push(newSchedule);
};
const mutateAddAgendaAppointments = (state, data) => {
  var agendass = [];
  state.agendas.forEach(element => {
    if (element.agendaId === data.agendaId) {
      element.appointments.push(data);
    }
    agendass.push(element);
  });
  state.agendas = agendass;
};
export default {
  mutateAddAgendaAppointments,
  mutateCreateAgenda,
  mutateUpdateAgenda,
  mutateDeleteAgenda,
  mutateAppointmentsList,
  updateAppointment,
  updateAgendaAppointment,
  deleteAppointment,
  updateAgendaSelected,
  mutateParticipantsList,
  mutationDeletePart,
  mutateAddRecursive,
  mutateUpdateRecursive,
  mutateDeleteRecursive,
  mutationUpdatePart,
  idToUpdate
  // los nombres de las funciones
};
