<<<<<<< HEAD
const createNewAgenda = ({ commit }, agenda) => {
  commit("mutateCreateAgenda", agenda);
};

const updateAgenda = ({ commit }, agenda) => {
  commit("mutateUpdateAgenda", agenda);
};

const deleteAgenda = ({ commit }, agenda) => {
  commit("mutateDeleteAgenda", agenda);
};
export default {
  createNewAgenda,
  updateAgenda,
  deleteAgenda

=======
// Ejemplo de como escribir la funcion
const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};
const addAppointment = ({ commit }, item) => {
  commit("mutateAppointmentsList", item);
};
const updateAppointment = ({ commit }, itemToUpdate) => {
  commit("updateAppointment", itemToUpdate);
};
export default {
  addAccount,
  addAppointment,
  updateAppointment
>>>>>>> scheduling
  // los nombres de las funciones
};
