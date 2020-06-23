import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Agenda from "@/components/Agenda.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { mockAgenda } from "./mockAgenda";

describe("Agenda CRUD", () => {
  let localVue;
  let store;
  let router;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    router = new VueRouter({ routes: [] });
    store = new Vuex.Store(mockAgenda);
  });
  it("Creating a new agenda should work properly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue,
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    let expectedInitialLength = 1;
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    assert.equal(store.agendas.length, expectedInitialLength);
    const newVal = {
      agendaId: "ANG-001",
      name: "Nuevo1",
      description: "Prueba Nuevo",
      startHour: "10:00",
      endHour: "12:00",
      appointments: []
    };
    expectedInitialLength = 2;
    wrapper.vm.createNewAgenda(newVal);
    assert.equal(store.agendas.length, expectedInitialLength);
  });

  it("Updating an agenda ahould work properly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue,
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    const updateVal = {
      agendaId: "ANG-001",
      name: "Cambio1",
      description: "Prueba Update",
      startHour: "10:00",
      endHour: "12:00",
      appointments: [],
    };
    assert.isFalse().equal(store.agendas[0], updateVal);
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    wrapper.vm.modifyAgenda(updateVal);
    assert.equal(store.agendas[0], updateVal);
  });

  it("Removing an agenda should work properly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue,
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    let expectedInitialLength = 1;
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    assert.equal(store.agendas.length, expectedInitialLength);
    const id = "ANG-001";
    expectedInitialLength = 0;
    wrapper.vm.removeAgenda(id);
    assert.equal(store.agendas.length, expectedInitialLength);
  });
});
