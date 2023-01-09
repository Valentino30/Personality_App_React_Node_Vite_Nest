import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Header from ".";

describe("Header Component", () => {
  let header: HTMLHeadingElement;

  it("Renders correctly", () => {
    render(<Header>Read Me</Header>);
    header = screen.getByText("Read Me");
    expect(header).toBeInTheDocument();
  });
});
