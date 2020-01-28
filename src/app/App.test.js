import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("renders Food! header", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Food!/i);
  expect(headerElement).toBeInTheDocument();
});
