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
  it("GenerateCode", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let lastIdPart = wrapper.vm.getLastId;
    let generateNewCode = wrapper.vm._generateNewCode();
    assert.equal(lastIdPart, "PART-1");
    assert.equal(generateNewCode, "PART-2");
  });
  it("Add new Participants", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let InicialLength = wrapper.vm.$store.state.participants.length;
    wrapper.vm.$data.name = "New Participant";
    wrapper.vm.$data.contactNumber = 12343534;
    wrapper.vm.saveNewPart();
    let partListLength = wrapper.vm.$store.state.participants.length;
    assert.equal(InicialLength + 1, partListLength);
  });
});
