import SingleBook from "../components/SingleBook";

const BookList = (prop) => {
  return (
    <div>
      {prop.map((book, index) => (
        <SingleBook key={index} src={book.src} cardtitle={book.cardtitle} />
      ))}
    </div>
  );
};

export default BookList;
