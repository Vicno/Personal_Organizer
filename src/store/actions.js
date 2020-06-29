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
const updateAgendaSelected = ({ commit }, itemToUpdate) => {
  commit("updateAgendaSelected", itemToUpdate);
};
const deletePostponedAppointment = ({ commit }, PostAppointment) => {
  commit("mutateDeletePostponedAppointment", PostAppointment);
};
const enableAppointment = ({ commit }, PostAppointment) => {
  commit("mutateEnableAppointment", PostAppointment);
};
const updateAgendaAppointments = ({ commit }, itemToUpdate) => {
  commit("updateAgendaAppointment", itemToUpdate);
};
export default {
  addAccount,
  addTargetAgendaAppointment,
  PostponeAppointment,
  deleteAppointment,
  updateAgendaSelected,
  deletePostponedAppointment,
  enableAppointment,
  updateAgendaAppointments
  // los nombres de las funciones
};
