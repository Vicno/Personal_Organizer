import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import RecursiveScheduling from "@/components/RecursiveSchedulingComp.vue";
import { mockStore } from "./mockStore";
import VueRouter from "vue-router";
import Vuex from "vuex";
before(() => {
  global.alert = function(alertMessage) {
    console.log(alertMessage);
  };
});
describe("LocalVue", () => {
  it("using the mockstore", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const router = new VueRouter({ routes: [] });
    const store = new Vuex.Store(mockStore);
    let wrapper = mount(RecursiveScheduling, {
      router,
      store,
      localVue
    });
    assert.equal(wrapper.vm.$store.state.recursiveAppointments.length, 1);
  });
});
describe("Validate CRUD", () => {
  let localVue;
  let store;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    store = new Vuex.Store(mockStore);
  });
  it("Validate data should pass if data enter", () => {
    const wrapper = mount(RecursiveScheduling, {
      store,
      localVue
    });
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.description = "description test";
    wrapper.vm.$data.date = "2020-05-10";
    wrapper.vm.$data.endDate = "2020-06-10";
    wrapper.vm.$data.frequency = "Month";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.agendaId = "ANG-0001";
    wrapper.vm.$data.participants = {};
    const isValid = wrapper.vm._validateData();
    console.log(isValid);
    assert.isTrue(isValid);
  });
  it("Validate hour data should pass if data enter is within limits", () => {
    const wrapper = mount(RecursiveScheduling, {
      store,
      localVue
    });
    wrapper.vm.$data.begin_hour = "11:00";
    wrapper.vm.$data.end_hour = "12:00";
    wrapper.vm.$data.agenda = "Work";
    const isValid = wrapper.vm._validateHour();
    assert.isTrue(isValid);
  });
  it("Validate date data should pass if data enter is a possible date and endDate", () => {
    const wrapper = mount(RecursiveScheduling, {
      store,
      localVue
    });
    wrapper.vm.$data.date = "2020-05-10";
    wrapper.vm.$data.endDate = "2020-06-10";
    const isValid = wrapper.vm._validateDate();
    assert.isTrue(isValid);
  });
});
/*
describe("Recursive Scheduling CRUD", () => {
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
  it("Create a Recursive Schedule", () => {
    const wrapper = shallowMount(RecursiveScheduling, {
      router,
      store,
      localVue
    });
    let expectedInitialLength = 1; //Inicialmente existe un solo recursive appointment
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments.length,
      expectedInitialLength
    );
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments[0].name,
      "Dentist"
    );
    const newValue = {
      name: "test",
      description: "description",
      date: "2020-05-10",
      endDate: "2020-06-10",
      frequency: "Month",
      begin_hour: "11:00",
      end_hour: "12:00",
      agenda: "ANG-0001",
      participants: {}
    };
    // Add the created value
    wrapper.vm.addRecursive(newValue);
    // Checking existence
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments.length,
      expectedInitialLength
    );
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments[1].name,
      newValue.name
    );
  });
  it("Update a Recursive Schedule", () => {
    const wrapper = shallowMount(RecursiveScheduling, {
      router,
      store,
      localVue
    });
    const updateData = {
      name: "test update",
      description: "description of update",
      date: "2020-05-10",
      endDate: "2020-07-10",
      frequency: "Day",
      begin_hour: "11:00",
      end_hour: "12:00",
      agenda: "ANG-0001",
      participants: {}
    };
    assert.notEqual(
      wrapper.vm.$store.state.recursiveAppointments[0],
      updateData
    );
    //Updating
    wrapper.vm.updateRecursive(updateData);
    //Checking changed data
    assert.notEqual(
      wrapper.vm.$store.state.recursiveAppointments[0].name,
      updateData.name
    );
    assert.notEqual(
      wrapper.vm.$store.state.recursiveAppointments[0].description,
      updateData.description
    );
    assert.notEqual(
      wrapper.vm.$store.state.recursiveAppointments[0].endDate,
      updateData.endDate
    );
    assert.notEqual(
      wrapper.vm.$store.state.recursiveAppointments[0].frequency,
      updateData.frequency
    );
  });
  it("Delete a Recursive Schedule", () => {
    const wrapper = shallowMount(RecursiveScheduling, {
      router,
      store,
      localVue
    });
    let expectedInitialLength = 2;
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments.length,
      expectedInitialLength
    );
    const name = "test update";
    expectedInitialLength = 1;
    //deletes
    wrapper.vm.deleteRecursive(name);
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments.length,
      expectedInitialLength
    );
  });
});
*/
