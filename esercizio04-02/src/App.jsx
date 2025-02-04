import "./App.css";
import AllTheBooks from "./assets/components/AllTheBooks";
import MyFooter from "./assets/components/MyFooter";
import MyNav from "./assets/components/MyNav";
import Welcome from "./assets/components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
