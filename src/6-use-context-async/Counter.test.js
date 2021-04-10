import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { CounterContainer } from "./Counter";

jest.mock("./fetchCount", () => ({
  fetchCount: () => new Promise(resolve =>
    setTimeout(() => resolve(44), 1000)
  ),
}));

describe("CounterContainer", () => {
  it("should load with initial count fetched", async () => {
    const { getByText, getAllByRole } = render(<CounterContainer />);

    expect(getByText(/is loading/)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByText(/is loading/i));

    const buttons = getAllByRole("button");
    expect(buttons[0].textContent).toEqual("44");
    expect(buttons[1].textContent).toEqual("44");
  });

  it("should increase count by 1 when clicking on any button", async () => {
    const { getByText, getAllByRole } = render(<CounterContainer />);

    await waitForElementToBeRemoved(() => getByText(/is loading/i));

    fireEvent.click(getAllByRole("button")[0]);

    let buttons = getAllByRole("button");
    expect(buttons[0].textContent).toEqual("45");
    expect(buttons[1].textContent).toEqual("45");

    fireEvent.click(getAllByRole("button")[1]);

    buttons = getAllByRole("button");
    expect(buttons[0].textContent).toEqual("46");
    expect(buttons[1].textContent).toEqual("46");
  });
});
