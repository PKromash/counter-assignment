import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test("clicking + increments the count", async () => {
  const incrementButton = screen.getByText("+");
  const count = screen.getByTestId("count");
  await fireEvent.click(incrementButton);
  expect(count).toHaveTextContent("1");
});

test("clicking - decrements the count", async () => {
  const decrementButton = screen.getByText("-");
  const count = screen.getByTestId("count");
  await fireEvent.click(decrementButton);
  expect(count).toHaveTextContent("-1");
});
