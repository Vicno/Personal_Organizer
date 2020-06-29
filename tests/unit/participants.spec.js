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
  it("Validate participant's data should not pass if no data enter", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    const isValid = wrapper.vm._validateData();
    assert.isFalse(isValid);
  });

  it("Validate participant's data should pass if data enter", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.contactNumber = 68567834;
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
  it("GenerateCode", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let lastIdPart = wrapper.vm.getLastId;
    let generateNewCode = wrapper.vm._generateNewCode();
    assert.equal(lastIdPart, "PART-001");
    assert.equal(generateNewCode, "PART-002");
  });
  it("Add new Participants", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let InicialLength = wrapper.vm.$store.state.participants.length;
    wrapper.vm.$data.name = "Person B";
    wrapper.vm.$data.contactNumber = 12343534;
    wrapper.vm.saveNewPart();
    let partListLength = wrapper.vm.$store.state.participants.length;
    assert.equal(InicialLength + 1, partListLength);
  });
  it("Visible form update", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let partToUpdate = wrapper.vm.$store.state.participants[1];
    //ParticipantId: PART-0002
    wrapper.vm.updateVisible(partToUpdate);
    let name = wrapper.vm.name;
    let contactNumber = wrapper.vm.contactNumber;
    let participantId = wrapper.vm.idUpdate;
    assert.equal(name, partToUpdate.name);
    assert.equal(contactNumber, partToUpdate.contactNumber);
    assert.equal(participantId, partToUpdate.participantId);
  });
  it("Update Participant", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    //ParticipantId: PART-0002
    let participantId = wrapper.vm.idUpdate;
    wrapper.vm.name = "Person C";
    wrapper.vm.contactNumber = "4567864";

    wrapper.vm.saveUpdate();

    let updated = wrapper.vm.$store.state.participants.filter(
      part => part.participantId === participantId
    )[0];
    assert.equal("Person C", updated.name);
    assert.equal("4567864", updated.contactNumber);
  });
  it("Delete participant without appointment", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let initialPartList = wrapper.vm.$store.state.participants.length;
    wrapper.vm.deletePart("PART-002");
    let partListLength = wrapper.vm.$store.state.participants.length;

    assert.equal(initialPartList - 1, partListLength);
  });
  it("Delete participant with appointment", () => {
    const wrapper = shallowMount(Participants, {
      store,
      localVue,
      router
    });
    let initialPartList = wrapper.vm.$store.state.participants.length;
    wrapper.vm.deletePart("PART-001");
    //PART-001 with appoitments
    let partListLength = wrapper.vm.$store.state.participants.length;

    assert.equal(initialPartList, partListLength);
  });
});
