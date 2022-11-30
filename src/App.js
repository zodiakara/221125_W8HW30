import "./App.css";
import Header from "./components/Header";
import MoviesPage from "./components/MoviesPage";
import FooterItem from "./components/FooterItem";
import TvShows from "./components/TvShows";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route element={<TvShows />} path="/tv-shows"></Route>
          <Route element={<MoviesPage />} path="/movies"></Route>
        </Routes>

        <FooterItem />
      </div>
    </BrowserRouter>
  );
}

export default App;
