import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import RecursiveScheduling from "@/components/UpdateRecursiveAppointmentComponent.vue";
import { mockStore } from "./mockStore";
import VueRouter from "vue-router";
import Vuex from "vuex";
before(() => {
  global.alert = function(alertMessage) {
    console.log(alertMessage);
  };
});
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
  it("Update a Recursive Schedule", () => {
    const wrapper = shallowMount(RecursiveScheduling, {
      router,
      store,
      localVue
    });
    const updateData = {
      name: "Dentist",
      description: "description of update",
      date: "2020-07-09",
      endDate: "2020-07-19",
      frequency: "Week",
      begin_hour: "11:00",
      end_hour: "12:00",
      agendaId: "Work",
      participants: {}
    };
    wrapper.vm.$data.name = updateData.name;
    wrapper.vm.$data.description = updateData.description;
    wrapper.vm.$data.date = updateData.date;
    wrapper.vm.$data.endDate = updateData.endDate;
    wrapper.vm.$data.frequency = updateData.frequency;
    wrapper.vm.$data.begin_hour = updateData.begin_hour;
    wrapper.vm.$data.end_hour = updateData.end_hour;
    wrapper.vm.$data.agenda = updateData.agendaId;
    wrapper.vm.$data.participants = updateData.participants;
    //Checking different data
    assert.notEqual(
      wrapper.vm.$store.state.recursiveAppointments[0],
      updateData
    );
    assert.equal(
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
    //Updating
    wrapper.vm.update();
    //Checking changed data
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments[0].name,
      updateData.name
    );
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments[0].description,
      updateData.description
    );
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments[0].endDate,
      "07/19/2020"
    );
    assert.equal(
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
    expectedInitialLength = 1;
    wrapper.vm.$data.name = "Dentist";
    //deletes
    wrapper.vm.deleteApp();
    assert.equal(
      wrapper.vm.$store.state.recursiveAppointments.length,
      expectedInitialLength
    );
  });
});
