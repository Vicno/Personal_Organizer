import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import RecursiveScheduling from "@/components/RecursiveScheduling.vue";
import store from "@/store";
import VueRouter from "vue-router";
import Vuex from "vuex";

describe("Recursive Scheduling CRUD", () => {
  it("Validate data should pass if data enter", () => {
    const wrapper = shallowMount(RecursiveScheduling);
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.description = "description test";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.date = "2020-05-10";
    wrapper.vm.$data.agenda = "ANG-0001";
    wrapper.vm.$data.participants = {};
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
  it("Validate hour data should pass if data enter is within limits", () => {
    const wrapper = shallowMount(RecursiveScheduling);
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.agenda = "ANG-0001";
    const isValid = wrapper.vm._validateHour();
    assert.isTrue(isValid);
  });
  it("Validate date data should pass if data enter is a possible date", () => {
    const wrapper = shallowMount(RecursiveScheduling);
    wrapper.vm.$data.date = "2020-05-10";
    const isValid = wrapper.vm._validateDate();
    assert.isTrue(isValid);
  });
});
describe("LocalVue", () => {
  it("using the store directly", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const router = new VueRouter({ routes: [] });
    let wrapper = shallowMount(RecursiveScheduling, {
      router,
      store,
      localVue
    });
    assert.equal(wrapper.vm.$store.state.scheduledAppointments.length, 1);
  });
});
