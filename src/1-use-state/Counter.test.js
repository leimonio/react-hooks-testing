import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { Counter } from "./Counter";

describe("Counter", () => {
  it("should initialize count to 0", () => {
    const { getByRole } = render(<Counter />);
    expect(getByRole("button").textContent).toEqual("0");
  });

  it("should increase count by 1", () => {
    const { getByRole } = render(<Counter />);
    fireEvent.click(getByRole("button"));
    expect(getByRole("button").textContent).toEqual("1");
  });
});
