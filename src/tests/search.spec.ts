/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import CustomInput from "../components/CutomInput.vue";
import { describe, it, expect, test } from "vitest";

describe("Custom Input", () => {
  it("should render", () => {
    const wrapper = mount(CustomInput, {
      props: { inputValue: "Star Wars", placeholder: "Search..." },
    });

    expect(wrapper.find("input").exists()).toBeTruthy();
  });

  it("should change input", async () => {
    const wrapper = mount(CustomInput, {
      props: { inputValue: "Star Wars", placeholder: "Search..." },
    });
    await wrapper.find('input[type="text"]').setValue("The Mandalorian");
    expect(wrapper.find("input").element.value).toEqual("The Mandalorian");
  });
});
