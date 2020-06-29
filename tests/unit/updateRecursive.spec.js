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
    const wrapper = mount(RecursiveScheduling, {
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
    const wrapper = mount(RecursiveScheduling, {
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
