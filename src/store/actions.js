// Ejemplo de como escribir la funcion
const createNewAgenda = ({ commit }, agenda) => {
  commit("mutateCreateAgenda", agenda);
};

const updateAgenda = ({ commit }, agenda) => {
  commit("mutateUpdateAgenda", agenda);
};

const deleteAgenda = ({ commit }, id) => {
  commit("mutateDeleteAgenda", id);
};
const addParticipant = ({ commit }, participant) => {
  commit("mutateParticipantsList", participant);
};
const deleteParticipant = ({ commit }, participantId) => {
  commit("mutationDeletePart", participantId);
};
const addRecursive = ({ commit }, schedule) => {
  commit("mutateAddRecursive", schedule);
};

const updateRecursive = ({ commit }, schedule) => {
  commit("mutateUpdateRecursive", schedule);
};
const deleteRecursive = ({ commit }, schedulename) => {
  commit("mutateDeleteRecursive", schedulename);
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
  addAppointment,
  updateAppointment,
  updateAgendaAppointments,
  deleteAppointment,
  updateAgendaSelected,
  addParticipant,
  deleteParticipant,
  addRecursive,
  updateRecursive,
  deleteRecursive
  // los nombres de las funciones
};
