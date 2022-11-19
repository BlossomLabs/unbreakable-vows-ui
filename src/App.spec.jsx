import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should display elements", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /text variants/i, level: 1 })
    ).toBeInTheDocument();
  });
});
