import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import fantasy from "../data/fantasy.json";

describe("BookList component", () => {
  it("il numero di card è corretto", async () => {
    render(<BookList books={fantasy} />);

    const cards = screen.getAllByTestId("book-card");

    expect(cards.length).toBe(150);
  });
});
