// Ejemplo de como escribir la funcion
/*const addAccount = ({ commit }, item) => {
  commit("mutateAccountList", item);
};*/

const createNewAgenda = ({ commit }, agenda) => {
  commit("mutateCreateAgenda", agenda);
};

const updateAgenda = ({ commit }, agenda) => {
  commit("mutateUpdateAgenda", agenda);
};

const deleteAgenda = ({ commit }, id) => {
  commit("mutateDeleteAgenda", id);
};
export default {
  createNewAgenda,
  updateAgenda,
  deleteAgenda

  // los nombres de las funciones
};
