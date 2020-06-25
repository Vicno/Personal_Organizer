import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Agenda from "@/views/Agenda.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { mockStore } from "./mockStore";

describe("Agenda CRUD", () => {
  let localVue;
  let store;
  let router;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    router = new VueRouter({ routes: [] });
    store = new Vuex.Store(mockStore);
  });
  it("Creating a new agenda should work properly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    let expectedInitialLength = 1;
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    assert.equal(wrapper.vm.$store.state.agendas.length, expectedInitialLength);
    assert.equal(wrapper.vm.$store.state.agendas[0].name, "Work");
    const newVal = {
      agendaId: "ANG-0002",
      name: "Nuevo1",
      description: "Prueba Nuevo",
      startHour: "10:00",
      endHour: "12:00",
      appointments: []
    };
    expectedInitialLength = 2;
    wrapper.vm.createNewAgenda(newVal);
    assert.equal(wrapper.vm.$store.state.agendas.length, expectedInitialLength);
    assert.equal(wrapper.vm.$store.state.agendas[1].name, newVal.name);
  });

  it("Updating an agenda ahould work properly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    const updateVal = {
      agendaId: "ANG-0001",
      name: "Cambio1",
      description: "Prueba Update",
      startHour: "10:00",
      endHour: "12:00",
      appointments: []
    };
    assert.notEqual(wrapper.vm.$store.state.agendas[0], updateVal);
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    wrapper.vm.updateAgenda(updateVal);
    assert.equal(
      wrapper.vm.$store.state.agendas[0].agendaId,
      updateVal.agendaId
    );
    assert.equal(wrapper.vm.$store.state.agendas[0].name, updateVal.name);
    assert.equal(
      wrapper.vm.$store.state.agendas[0].description,
      updateVal.description
    );
    assert.equal(
      wrapper.vm.$store.state.agendas[0].description,
      updateVal.description
    );
    assert.equal(
      wrapper.vm.$store.state.agendas[0].startHour,
      updateVal.startHour
    );
    assert.equal(wrapper.vm.$store.state.agendas[0].endHour, updateVal.endHour);
  });

  it("Removing an agenda should work properly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    let expectedInitialLength = 2;
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    assert.equal(wrapper.vm.$store.state.agendas.length, expectedInitialLength);
    const id = "ANG-0001";
    expectedInitialLength = 1;
    wrapper.vm.deleteAgenda(id);
    assert.equal(wrapper.vm.$store.state.agendas.length, expectedInitialLength);
  });
});

describe("Agenda logic tests should work propperly", () => {
  let localVue;
  let store;
  let router;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    router = new VueRouter({ routes: [] });
    store = new Vuex.Store(mockStore);
  });
  it("verifyHora should work propperly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]
    assert.equal(wrapper.vm.verifyHora("10:30", "10:40"), true);
    assert.notEqual(wrapper.vm.verifyHora("10:50", "10:40"), true);
  });

  it("verifyFields Should work propperly", () => {
    const wrapper = shallowMount(Agenda, {
      router,
      store,
      localVue
    }); // wrapper = { new Vue(), html, find, findAll, etc }
    //const agendas = wrapper.vm.$data.agendas; // wrapper.vm.$data.groups[0]

    assert.notEqual(wrapper.vm.verifyHora("10:50", "10:40"), true);
    wrapper.vm.$data.agendaID = "Algo";
    wrapper.vm.$data.nombre = "Algo";
    wrapper.vm.$data.descripcion = "Algo";
    wrapper.vm.$data.startHora = "Algo";
    wrapper.vm.$data.endHora = "Algo";
    assert.equal(wrapper.vm.verifyHora("10:30", "10:40"), true);
  });
});
