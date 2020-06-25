const createNewAgenda = ({ commit }, agenda) => {
  commit("mutateCreateAgenda", agenda);
};

const updateAgenda = ({ commit }, agenda) => {
  commit("mutateUpdateAgenda", agenda);
};

const deleteAgenda = ({ commit }, agenda) => {
  commit("mutateDeleteAgenda", agenda);
};
export default {
  createNewAgenda,
  updateAgenda,
  deleteAgenda

  // los nombres de las funciones
};
