// Ejemplo de como escribir la funcion
const getAccounts = state => state.ACCOUNTS;
const getAgendas = state => state.agendas;
const getAppointments = state => state.scheduledAppointments;
const getPostponedAppointments = state => state.postponedAppointments;
const getAgendaAppointments = state => state.agendas.appointments;
export default {
  getAccounts,
  getAgendas,
  getAppointments,
  getPostponedAppointments,
  getAgendaAppointments
  // los nombres de las funciones
};
