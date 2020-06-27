// Ejemplo de como escribir la funcion
const getAccounts = state => state.ACCOUNTS;
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getPostponedAppointments = state => state.postponedAppointments;
export default {
  getAccounts,
  getAgendas,
  getAppointments,
  getPostponedAppointments
  // los nombres de las funciones
};
