import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Scheduling from "@/components/SchedulingComponent.vue";
import { mockStore } from "./mockStore";
import store from "@/store";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";

describe("Scheduling CRUD", () => {
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
    wrapper = shallowMount(Scheduling, {
      store,
      vuetify,
      localVue
    });
    const isValid = wrapper.vm._validateData();
    assert.isFalse(isValid);
  });
  it("Validate data should pass if data enter", () => {
    wrapper = shallowMount(Scheduling, {
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
    wrapper.vm.$data.participants = [];
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
  it("Validate hour data should pass if data enter is correct", () => {
    wrapper = shallowMount(Scheduling, {
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
    wrapper = shallowMount(Scheduling, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.date = "2020-12-10";
    const isValid = wrapper.vm._validateDate();
    assert.isTrue(isValid);
  });
  it("Increase when save", () => {
    wrapper = shallowMount(Scheduling, {
      store,
      vuetify,
      localVue
    });
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.description = "description test";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.date = "2020-10-10";
    wrapper.vm.$data.agenda = "Work";
    wrapper.vm.$data.participants = [];
    wrapper.vm.saveApointment();
    assert.equal(wrapper.vm.$store.state.scheduledAppointments.length, 2);
  });
});
describe("LocalVue", () => {
  it("using the store directly", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const router = new VueRouter({ routes: [] });
    let wrapper = shallowMount(Scheduling, {
      router,
      store,
      localVue
    });
    assert.equal(wrapper.vm.$store.state.scheduledAppointments.length, 1); //added in recursive appointments 1 appointment, so changed 1 for 2 of expected
  });
});
