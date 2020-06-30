import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import UpdateAppoint from "@/components/UpdateAppointmentComponent.vue";
import Scheduling from "@/components/SchedulingComponent.vue";
import { mockStore } from "./mockStore";
import store from "@/store";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";
before(() => {
  global.alert = function(alertMessage) {
    console.log(alertMessage);
  };
});

describe("Update Scheduling CRUD", () => {
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
    wrapper = shallowMount(UpdateAppoint, {
      store,
      vuetify,
      localVue
    });
    const isValid = wrapper.vm._validateData();
    assert.isFalse(isValid);
  });
  it("Validate data should pass if data enter", () => {
    wrapper = shallowMount(UpdateAppoint, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.description = "description test";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.date = "2020-10-10";
    wrapper.vm.$data.agenda = "ANG-0001";
    wrapper.vm.$data.participants = {};
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
  it("Validate hour data should pass if data enter is correct", () => {
    wrapper = shallowMount(UpdateAppoint, {
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
    wrapper = shallowMount(UpdateAppoint, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.date = "2020-12-10";
    const isValid = wrapper.vm._validateDate();
    assert.isTrue(isValid);
  });
  it("Decrease when delete", () => {
    wrapper = shallowMount(UpdateAppoint, {
      store,
      vuetify,
      localVue
    });
    let wrapper1 = shallowMount(Scheduling, {
      store,
      vuetify,
      localVue
    });
    wrapper1.vm.$data.name = "test";
    wrapper1.vm.$data.description = "description test";
    wrapper1.vm.$data.end_hour = "12:00";
    wrapper1.vm.$data.begin_hour = "11:00";
    wrapper1.vm.$data.date = "2020-10-10";
    wrapper1.vm.$data.agenda = "Work";
    wrapper1.vm.$data.participants = [];
    wrapper1.vm.saveApointment();
    assert.equal(wrapper1.vm.$store.state.scheduledAppointments.length, 3);
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.description = "description test";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.date = "2020-10-10";
    wrapper.vm.$data.agenda = "Work";
    wrapper.vm.$data.participants = [];
    wrapper.vm.deleteApp();
    assert.equal(wrapper1.vm.$store.state.scheduledAppointments.length, 0);
  });
  it("Update Data", () => {
    wrapper = shallowMount(UpdateAppoint, {
      store,
      vuetify,
      localVue
    });
    let wrapper1 = shallowMount(Scheduling, {
      store,
      vuetify,
      localVue
    });
    wrapper1.vm.$data.name = "test";
    wrapper1.vm.$data.description = "description test";
    wrapper1.vm.$data.end_hour = "12:00";
    wrapper1.vm.$data.begin_hour = "11:00";
    wrapper1.vm.$data.date = "2020-10-10";
    wrapper1.vm.$data.agenda = "Work";
    wrapper1.vm.$data.participants = [];
    wrapper1.vm.saveApointment();
    assert.equal(wrapper1.vm.$store.state.scheduledAppointments.length, 1);
    assert.equal(
      wrapper1.vm.$store.state.scheduledAppointments[0].name,
      "test"
    );
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.description = "description";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.date = "2020-10-10";
    wrapper.vm.$data.agenda = "Work";
    wrapper.vm.$data.participants = [];
    wrapper.vm.saveApointment();
    assert.equal(wrapper1.vm.$store.state.scheduledAppointments.length, 1);
    assert.equal(
      wrapper1.vm.$store.state.scheduledAppointments[0].description,
      "description"
    );
  });
});
describe("LocalVue", () => {
  it("using the store directly", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const router = new VueRouter({ routes: [] });
    let wrapper = shallowMount(UpdateAppoint, {
      router,
      store,
      localVue
    });
    assert.equal(wrapper.vm.$store.state.scheduledAppointments.length, 1); //added in recursive appointments 1 appointment, so changed 1 for 2 of expected
  });
});
