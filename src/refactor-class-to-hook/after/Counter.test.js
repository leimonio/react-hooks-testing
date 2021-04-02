import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

test("updateCount updates the count state", () => {
  const { getByRole } = render(<Counter />);
  expect(getByRole("button").textContent).toEqual("30");
  fireEvent.click(getByRole("button"));
  expect(getByRole("button").textContent).toEqual("31");
});
