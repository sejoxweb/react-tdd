import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SuperCounter from "./SuperCounter";

test("it should correctly render initial value 5", () => {
  render(<SuperCounter initialValue={5} />);
  const counter = screen.getByText(5);
  expect(counter).toBeVisible();
});

test("it should render 0 when inital value null or undefined", () => {
  render(<SuperCounter />);
  const counter = screen.getByText(0);
  expect(counter).toBeVisible();
});

test("it should increase by 1 when initial value 0 and plus button clicked once", () => {
  render(<SuperCounter initialValue={0} />);
  const plusBtn = screen.getByText("plus");
  userEvent.click(plusBtn);
  const counter = screen.getByText(1);
  expect(counter).toBeVisible();
});

test("it should increase by 2 when initial value 0  and plus button clicked twice", () => {
  render(<SuperCounter initialValue={0} />);
  const plusBtn = screen.getByText("plus");
  userEvent.click(plusBtn);
  userEvent.click(plusBtn);
  const counter = screen.getByText(2);
  expect(counter).toBeVisible();
});

test("it should decrease by 1 when initial value 10 and minus button clicked once", () => {
  render(<SuperCounter initialValue={10} />);
  const minusBtn = screen.getByText("minus");
  userEvent.click(minusBtn);
  const counter = screen.getByText(9);
  expect(counter).toBeVisible();
});

test("it should decrease by 2 when initial value 10 and minus button clicked twice", () => {
  render(<SuperCounter initialValue={10} />);
  const minusBtn = screen.getByText("minus");
  userEvent.click(minusBtn);
  userEvent.click(minusBtn);
  const counter = screen.getByText(8);
  expect(counter).toBeVisible();
});

test("it should be 0 and not allow negative when initial value 0 and minus button clicked once", () => {
  render(<SuperCounter initialValue={0} />);
  const minusBtn = screen.getByText("minus");
  userEvent.click(minusBtn);
  const counter = screen.getByText(0);
  expect(counter).toBeVisible();
});

test("it should be 0 and not allow negative when inital value 2 and remove button clicked 4 times", () => {
  render(<SuperCounter initialValue={2} />);
  const minusBtn = screen.getByText("minus");
  userEvent.click(minusBtn);
  userEvent.click(minusBtn);
  userEvent.click(minusBtn);
  userEvent.click(minusBtn);
  const counter = screen.getByText(0);
  expect(counter).toBeVisible();
});
