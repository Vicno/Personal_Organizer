// Ejemplo de como escribir la funcion
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getLastId = state => state.agendas[getAgendas.length - 1].agendaId;
const getpostponedAppointments = state => state.postponedAppointments;
const getrecursiveAppointments = state => state.recursiveAppointments;
const getAgendaSelected = state => state.agendaSelected;
const getRecursiveSchedules = state => state.recursiveAppointments;
const getLastParticipant = state =>
  state.participants[state.participants.length - 1].participantId;
const getParticipants = state => state.participants;
export default {
  getAgendas,
  getAppointments,
  getpostponedAppointments,
  getrecursiveAppointments,
  getAgendaSelected,
  getLastId,
  getRecursiveSchedules,
  getLastParticipant,
  getParticipants
  // los nombres de las funciones
};
