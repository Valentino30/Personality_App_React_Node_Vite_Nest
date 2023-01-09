import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import List from ".";
import ListItem from "../ListItem";

describe("List Component", () => {
  let list: HTMLUListElement;
  let listItems: HTMLLIElement;

  it("Renders correctly", () => {
    render(<List />);
    list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders children correctly", () => {
    render(
      <List>
        <ListItem key="1">1</ListItem>
        <ListItem key="2">2</ListItem>
        <ListItem key="3">3</ListItem>
      </List>
    );
    list = screen.getByRole("list");
    listItems = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });
});
