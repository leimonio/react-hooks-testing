import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { Counter } from "./Counter";

test("increaseCount updates the count state", () => {
  const wrapper = mount(<Counter />);
  expect(wrapper.state("count")).toBe(30);
  wrapper.instance().increaseCount();
  expect(wrapper.state("count")).toBe(31);
});

test("increaseCount updates the count state", () => {
  const wrapper = mount(<Counter />);
  expect(wrapper.find("button").prop("children")).toEqual(30);
  wrapper.find("button").simulate('click');
  expect(wrapper.find("button").prop("children")).toEqual(31);
});
