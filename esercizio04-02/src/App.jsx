import "./App.css";

import MyFooter from "./assets/components/MyFooter";
import MyNav from "./assets/components/MyNav";
import Welcome from "./assets/components/Welcome";
import SingleBook from "./assets/components/SingleBook";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <SingleBook />

      <MyFooter />
    </>
  );
}

export default App;
