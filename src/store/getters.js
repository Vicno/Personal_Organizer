// Ejemplo de como escribir la funcion
const getAccounts = state => state.ACCOUNTS;
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getPostponedAppointments = state => state.postponedAppointments;
const getRecursiveAppointments = state => state.recursiveAppointments;
export default {
  getAccounts,
  getAgendas,
  getAppointments,
  getPostponedAppointments,
  getRecursiveAppointments
  // los nombres de las funciones
};
