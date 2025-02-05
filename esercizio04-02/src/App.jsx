import "./App.css";
import BookList from "./assets/components/BookList";
/*import AllTheBooks from "./assets/components/AllTheBooks";*/
import MyFooter from "./assets/components/MyFooter";
import MyNav from "./assets/components/MyNav";
import SingleBook from "./assets/components/SingleBook";
import Welcome from "./assets/components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      {/*<AllTheBooks />*/}
      <SingleBook
        src="https://images-na.ssl-images-amazon.com/images/I/91dDIYze1wL.jpg"
        title="The Silent Corner: A Novel of Suspense (Jane Hawk)"
      />

      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
