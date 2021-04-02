import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { Counter } from "./Counter";

test("increaseCount updates the count state", () => {
  const wrapper = shallow(<Counter />);
  expect(wrapper.state("count")).toBe(30);
  wrapper.instance().increaseCount();
  expect(wrapper.state("count")).toBe(31);
});
