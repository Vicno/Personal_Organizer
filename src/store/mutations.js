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
  let valide = false;
  state.participants.forEach(part => {
    if (part.name.toUpperCase() === newParticipant.name.toUpperCase()) {
      valide = true;
    }
  });
  if (!valide) {
    state.participants.push(newParticipant);
  } else {
    alert("This name is already exists \n  Change name please.");
  }
};
const mutationUpdatePart = (state, partToUpdate) => {
  let valide = false;
  let foundAccountIndex = state.participants.findIndex(account => {
    account.participantId === partToUpdate.participantId;
  });
  let listPart = state.participants.filter(
    part => part.participantId !== partToUpdate.participantId
  );
  listPart.forEach(part => {
    if (part.name.toUpperCase() === partToUpdate.name.toUpperCase()) {
      valide = true;
    }
  });
  if (!valide) {
    state.participants.splice(foundAccountIndex, 1, partToUpdate);
  } else {
    alert("This name is already exists \n  Change name please.");
  }
};
const mutationDeletePart = (state, partToDelete) => {
  var bool = 0;
  state.agendas.forEach(agenda =>
    agenda.appointments.forEach(apo =>
      apo.participants.forEach(part => {
        if (part === partToDelete) {
          bool += 1;
        }
      })
    )
  );
  if (bool === 0) {
    state.participants = state.participants.filter(
      part => part.participantId !== partToDelete
    );
  } else {
    alert(partToDelete + " is in some appointment");
  }
};

const mutateUpdateRecursive = (state, updateSchedule) => {
  const indexSchedule = state.recursiveAppointments.findIndex(
    rt => rt.name === updateSchedule.name
  );
  if (indexSchedule > -1) {
    state.recursiveAppointments.splice(indexSchedule, 1, updateSchedule);
  }
};
const updateAppointment = (state, itemToUpdate) => {
  const foundItem = state.scheduledAppointments.findIndex(
    st => st.name === itemToUpdate.name
  );
  if (foundItem >= 0) {
    state.scheduledAppointments.splice(foundItem, 1, itemToUpdate);
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
const mutateUpdatePostponedAppointment = (state, itemToUpdate) => {
  const foundItem = state.postponedAppointments.findIndex(
    st => st.name === itemToUpdate.name
  );
  if (foundItem >= 0) {
    state.postponedAppointments.splice(foundItem, 1, itemToUpdate);
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
const mutateEnableAppointment = (state, newAppointment) => {
  state.agendas.forEach(element => {
    if (element.agendaId === newAppointment.agendaId) {
      element.appointments.push(newAppointment);
    }
  });
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
  idToUpdate,
  mutateEnableAppointment,
  mutateUpdatePostponedAppointment,
  mutatePostponeAppointment,
  mutateDeletePostponedAppointment
  // los nombres de las funciones
};
