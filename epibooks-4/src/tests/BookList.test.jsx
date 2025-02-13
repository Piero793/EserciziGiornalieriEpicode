import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import booksData from "./books.json";

describe("BookList component", () => {
  it("should render the correct number of Bootstrap cards", () => {
    render(<BookList books={booksData} />);

    const cards = screen.getAllByClassName("card");

    expect(cards).toHaveLength(booksData.length);
  });
});
