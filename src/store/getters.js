// Ejemplo de como escribir la funcion
const getAccounts = state => state.ACCOUNTS;
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getpostponedAppointments = state => state.postponedAppointments;
const getrecursiveAppointments = state => state.recursiveAppointments;
const getAgendaSelected = state => state.agendaSelected;
export default {
  getAccounts,
  getAgendas,
  getAppointments,
  getpostponedAppointments,
  getrecursiveAppointments,
  getAgendaSelected
  // los nombres de las funciones
};
