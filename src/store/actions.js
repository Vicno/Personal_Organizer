// Ejemplo de como escribir la funcion
/*const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};*/

const createNewAgenda = ({ commit }, agenda) => {
  commit("mutateCreateAgenda", agenda);
};

const updateAgenda = ({ commit }, agenda) => {
  commit("mutateUpdateAgenda", agenda);
};

const deleteAgenda = ({ commit }, id) => {
  commit("mutateDeleteAgenda", id);
};
const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};
const addAppointment = ({ commit }, item) => {
  commit("mutateAppointmentsList", item);
};
const updateAppointment = ({ commit }, itemToUpdate) => {
  commit("updateAppointment", itemToUpdate);
};
const updateAgendaAppointments = ({ commit }, itemToUpdate) => {
  commit("updateAgendaAppointment", itemToUpdate);
};
const deleteAppointment = ({ commit }, itemToDelete) => {
  commit("deleteAppointment", itemToDelete);
};
const updateAgendaSelected = ({ commit }, itemToUpdate) => {
  commit("updateAgendaSelected", itemToUpdate);
};
export default {
  createNewAgenda,
  updateAgenda,
  deleteAgenda,
  addAccount,
  addAppointment,
  updateAppointment,
  updateAgendaAppointments,
  deleteAppointment,
  updateAgendaSelected
  // los nombres de las funciones
};
