// Ejemplo de como escribir la funcion
const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};
const addTargetAgendaAppointment = ({ commit }, item) => {
  commit("mutateTargetAgendaAppointment", item);
};
const PostponeAppointment = ({ commit }, postponeApp) => {
  commit("mutatePostponeAppointment", postponeApp);
};
const deleteAppointment = ({ commit }, deleteApp) => {
  commit("mutateDeleteAppointment", deleteApp);
};

export default {
  addAccount,
  addTargetAgendaAppointment,
  PostponeAppointment,
  deleteAppointment
  // los nombres de las funciones
};
