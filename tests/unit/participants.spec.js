import { assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import Participants from "@/components/Participants.vue";

describe("Participants CRUD", () => {
  it("Validate data should not pass if no data enter", () => {
    const wrapper = shallowMount(Participants);

    const isValid = wrapper.vm._validateData();
    assert.isFalse(isValid);
  });

  it("Validate data should pass if data enter", () => {
    const wrapper = shallowMount(Participants);

    wrapper.vm.$data.name = "test";
    wrapper.vm.$data.phone = "user";
    const isValid = wrapper.vm._validateData();
    assert.isTrue(isValid);
  });
});
