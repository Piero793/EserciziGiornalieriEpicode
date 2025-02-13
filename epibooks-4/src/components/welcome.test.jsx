import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import Welcome from "./Welcome";

describe("Welcome", () => {
  it("Welcome component exists", () => {
    render(<Welcome />);

    screen.debug();
  });
});
