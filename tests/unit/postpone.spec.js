import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Postpone from "@/components/PostponeComponent.vue";
import { mockStore } from "./mockStore";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";

describe("Postpone CRUD", () => {
  let localVue;
  let store;
  let wrapper;
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    store = new Vuex.Store(mockStore);
  });
  it("Validate data shoul pass if data enter", () => {
    wrapper = shallowMount(Postpone, {
      store,
      vuetify,
      localVue
    });
    const isValid = wrapper.vm._validateData();
    assert.isFalse(isValid);
  });
  it("Validate data should pass if data enter", () => {
    wrapper = shallowMount(Postpone, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.date = "2020-10-10";
    wrapper.vm.$data.targetAgenda = "ANG-0001";
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
  it("Validate hour data should pass if data enter is correct", () => {
    wrapper = shallowMount(Postpone, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.agenda = "Work";
    const isValid = wrapper.vm._validateHour();
    assert.isTrue(isValid);
  });
  it("Validate date data should pass if data enter is a possible date", () => {
    wrapper = shallowMount(Postpone, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.date = "2020-12-10";
    const isValid = wrapper.vm._validateDate();
    assert.isTrue(isValid);
  });
});

describe("Postpone CRUD :) ", () => {
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
  it("Postpone Appointment works?", () => {
    let wrapper = shallowMount(Postpone, {
      router,
      store,
      localVue
    });
    let expectedInitialLength = 1; //Inicialmente existe un solo postponed appointment
    assert.equal(
      wrapper.vm.$store.state.postponedAppointments.length,
      expectedInitialLength
    );
    assert.equal(
      wrapper.vm.$store.state.postponedAppointments[0].name,
      "Study with no one"
    );
    const newValue = {
      name: "Dentist",
      description: "I need to go to dentist",
      date: "06/27/2020",
      startHour: "10:00",
      endHour: "11:00",
      agendaId: "ANG-0001",
      participants: ["PART-001"]
    };
    // Add the created value
    wrapper.vm.savePostponedAppointment(newValue);
    // Checking existence
    assert.notEqual(
      wrapper.vm.$store.state.postponedAppointments.length,
      expectedInitialLength
    );
    assert.equal(
      wrapper.vm.$store.state.postponedAppointments[1].name,
      newValue.name
    );
  });

  it("Enabling a postponed appointment works?", () => {
    let wrapper = shallowMount(Postpone, {
      router,
      store,
      localVue
    });
    let expectedInitialLength2 = 2; //ahora existen 2 postponed appointments
    assert.equal(
      wrapper.vm.$store.state.postponedAppointments.length,
      expectedInitialLength2
    );
    const postponedApp = {
      agendaId: "ANG-0001",
      name: "Study with no one",
      description: "I need help "
    };
    const newValue = {
      name: postponedApp.name,
      description: postponedApp.description,
      date: "06/27/2020",
      startHour: "10:00",
      endHour: "11:00",
      agendaId: "ANG-0001",
      participants: []
    };
    // Add the created value
    wrapper.vm.deletePostponedAppointment(postponedApp);
    wrapper.vm.enableAppointment(newValue);
    // Checking existence
    assert.notEqual(
      wrapper.vm.$store.state.postponedAppointments.length,
      expectedInitialLength2
    );
  });
});
