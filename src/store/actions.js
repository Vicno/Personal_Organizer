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

const updateRecursive = ({ commit }, itemToUpdate) => {
  commit("mutateUpdateRecursive", itemToUpdate);
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
const deleteAppointment = ({ commit }, itemToDelete) => {
  commit("deleteAppointment", itemToDelete);
};
const updateAgendaSelected = ({ commit }, itemToUpdate) => {
  commit("updateAgendaSelected", itemToUpdate);
};
const updateParticipant = ({ commit }, partToUpdate) => {
  commit("mutationUpdatePart", partToUpdate);
};
const updatePartId = ({ commit }, idUpdate) => {
  commit("idToUpdate", idUpdate);
};
const addRecursive = ({ commit }, schedule) => {
  commit("mutateAddRecursive", schedule);
};
const addAppointmentToAgenda = ({ commit }, data) => {
  commit("mutateAddAgendaAppointments", data);
};
const addTargetAgendaAppointment = ({ commit }, item) => {
  commit("mutateTargetAgendaAppointment", item);
};
const PostponeAppointment = ({ commit }, postponeApp) => {
  commit("mutatePostponeAppointment", postponeApp);
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
const updatePostponedAppointment = ({ commit }, itemToUpdate) => {
  commit("mutateUpdatePostponedAppointment", itemToUpdate);
};

export default {
  createNewAgenda,
  updateAgenda,
  deleteAgenda,
  updateAgendaSelected,
  updateAgendaAppointments,
  addAppointment,
  updateAppointment,
  addAppointmentToAgenda,
  PostponeAppointment,
  deleteAppointment,
  addRecursive,
  updateRecursive,
  deleteRecursive,
  addParticipant,
  deleteParticipant,
  updateParticipant,
  updatePartId,
  addTargetAgendaAppointment,
  deletePostponedAppointment,
  enableAppointment,
  updatePostponedAppointment
  // los nombres de las funciones
};
