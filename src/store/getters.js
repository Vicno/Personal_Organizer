// Ejemplo de como escribir la funcion
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getpostponedAppointments = state => state.postponedAppointments;
const getrecursiveAppointments = state => state.recursiveAppointments;
const getAgendaSelected = state => state.agendaSelected;
const getLastParticipant = state =>
  state.participants[state.participants.length - 1].participantId;
const getParticipants = state => state.participants;
const getPostponedAppointments = state => state.postponedAppointments;
const getRecursiveAppointments = state => state.recursiveAppointments;
const getUpdateIdPart = state => state.partIdToUpdate;
const getPartOfAppoitments = state => state.idPartOfAppo;
const getListPart = state => state.participantOfAppoitments;
export default {
  getAgendas,
  getAppointments,
  getpostponedAppointments,
  getrecursiveAppointments,
  getPartOfAppoitments,
  getAgendaSelected,
  getLastParticipant,
  getParticipants,
  getUpdateIdPart,
  getPostponedAppointments,
  getRecursiveAppointments,
  getListPart
  // los nombres de las funciones
};
