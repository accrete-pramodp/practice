import AboutData from "../src/components/AboutData.vue";
import { mount } from "@vue/test-utils";

it("AboutData Component renders the correct text", () => {
  const wrapper = mount(AboutData);
  expect(wrapper.text()).toBe("This is my about page data.");
});