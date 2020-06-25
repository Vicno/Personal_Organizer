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
      console.log(index);
      if (index > -1) {
        state.agendas.splice(index, 1);
      }
    }
  });
};
export default {
  mutateCreateAgenda,
  mutateUpdateAgenda,
  mutateDeleteAgenda

  // los nombres de las funciones
};
