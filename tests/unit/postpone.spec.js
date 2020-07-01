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
