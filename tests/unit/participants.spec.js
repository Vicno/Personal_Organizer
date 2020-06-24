import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Participants from "@/components/Participants.vue";

import VueRouter from "vue-router";
import Vuex from "vuex";
import { mockStore } from "./mockStore";

describe("Participants CRUD", () => {
  let localVue;
  let router;
  let store;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    router = new VueRouter({ routes: [] });
    store = new Vuex.Store(mockStore);
  });
  it("Validate data should not pass if no data enter", () => {
    const wrapper = shallowMount(Participants);

    const isValid = wrapper.vm._validateData();
    assert.isFalse(isValid);
  });

  it("Validate data should pass if data enter", () => {
    const wrapper = shallowMount(Participants);

    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.contactNumber = "user";
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
  it("GenerateCode", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    var lastIdPart = wrapper.vm.getLastId;
    var newIdPart = wrapper.vm._generateNewCode();
    assert.equal(lastIdPart, "PART-1");
    assert.equal(newIdPart, "PART-2");
  });
});
