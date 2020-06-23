import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agendas: [],
  },
  actions: {
    createAgenda({ commit }, agenda) {
      commit("mutateAddAgenda", agenda);
    },
    updateAgenda({ commit }, agenda) {
      commit("mutateUpdateAgenda", agenda);
    },
    deleteAgenda({ commit }, id) {
      commit("mutateDeleteAggenda", id);
    },
  },
  mutations: {
    mutateAddAgenda(state, updateAgenda) {
      state.agendas.push(updateAgenda);
    },
    mutateUpdateAgenda(state, updateAgenda) {
      state.agendas.forEach(agenda => {
        if (agenda.agendaId === updateAgenda.agendaId) {
          agenda.name = updateAgenda.name;
          agenda.description = updateAgenda.description;
          agenda.startHour = updateAgenda.startHour;
          agenda.endHour = updateAgenda.endHour;
        }
      });
    },
    mutateDeleteAgenda(state, id) {
      state.agendas.forEach(agenda => {
        if (agenda.agendaId === id) {
          let index = state.agendas.indexOf(agenda);
          if (index > -1) {
            state.agendas.splice(index, 1);
          }
        }
      });
    },
  },
  modules: {},
});
