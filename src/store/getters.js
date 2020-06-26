// Ejemplo de como escribir la funcion
//const getAccounts = state => state.ACCOUNTS;

const getAgendas = state => state.agendas;
const getAccounts = state => state.ACCOUNTS;
const getAppointments = state => state.scheduledAppointments;
export default {
  //getAccounts
  // los nombres de las funciones
  getAgendas,
  getAccounts,
  getAppointments
};
