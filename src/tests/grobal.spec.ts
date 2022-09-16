/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import CustomInput from "../components/CutomInput.vue";
import { describe, it, expect } from "vitest";
import { sortByProp } from "@/shared/utils";
import useAPIManager from "@/composables/useAPIManager";

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

  it("should be sorted by rating", async () => {
    const { getAllShows } = useAPIManager();
    const shows = await getAllShows();
    const sorted = sortByProp(shows, "rating.average");

    expect(sorted[0].rating.average).toBeGreaterThanOrEqual(
      sorted[1].rating.average
    );
  });
});
