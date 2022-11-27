import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders super counter title element", () => {
  render(<App />);
  const linkElement = screen.getByText(/super counter/i);
  expect(linkElement).toBeVisible();
});
