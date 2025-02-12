import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import TVShows from "../components/TvShows";
import Footer from "../components/Footer";
import TrendingNow from "../components/TrendingNow";
import WatchItAgain from "../components/WatchItAgain";
import NewReleases from "../components/NewReleases";
import Settings from "../components/Settings";
import AccountPage from "../components/AccountPage";
import MovieDetails from "../components/MovieDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/movie/details/:movieID" element={<MovieDetails />} />
        <Route
          path="/"
          element={
            <>
              <TVShows />
              <TrendingNow />
              <WatchItAgain />
              <NewReleases />
            </>
          }
          exact
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
