// Ejemplo de como escribir la funcion
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getLastId = state => state.agendas[getAgendas.length - 1].agendaId;
const getpostponedAppointments = state => state.postponedAppointments;
const getrecursiveAppointments = state => state.recursiveAppointments;
const getAgendaSelected = state => state.agendaSelected;
export default {
  getAgendas,
  getAppointments,
  getpostponedAppointments,
  getrecursiveAppointments,
  getAgendaSelected,
  getLastId
  // los nombres de las funciones
};
