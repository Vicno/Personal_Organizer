// Ejemplo de como escribir la funcion
const mutateAccountList = (state, newAccount) => {
  state.ACCOUNTS.push(newAccount);
};
export default {
  createAgenda({ commit }, agenda) {
    commit("mutateAddAgenda", agenda);
  },
  updateAgenda({ commit }, agenda) {
    commit("mutateUpdateAgenda", agenda);
  },
  deleteAgenda({ commit }, id) {
    commit("mutateDeleteAggenda", id);
  },
  // los nombres de las funciones
};
