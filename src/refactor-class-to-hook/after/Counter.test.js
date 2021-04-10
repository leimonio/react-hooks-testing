import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

it("button click increases the coubt by 1", () => {
  const { getByRole } = render(<Counter />);
  expect(getByRole("button").textContent).toEqual("30");
  fireEvent.click(getByRole("button"));
  expect(getByRole("button").textContent).toEqual("31");
});
