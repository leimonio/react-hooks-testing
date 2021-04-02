import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { CounterContainer } from "./Counter";

describe("CounterContainer", () => {
  it("should initialize count to 0", () => {
    const { getAllByRole } = render(<CounterContainer />);
    const buttons = getAllByRole("button");
    expect(buttons[0].textContent).toEqual("30");
    expect(buttons[1].textContent).toEqual("30");
  });

  it("should increase count by 1", () => {
    const { getAllByRole } = render(<CounterContainer />);
    fireEvent.click(getAllByRole("button")[0]);
    const buttons = getAllByRole("button");
    expect(buttons[0].textContent).toEqual("31");
    expect(buttons[1].textContent).toEqual("31");
  });
});
