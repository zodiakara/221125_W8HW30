import "./App.css";
import Header from "./components/Header";
import GalleryItem from "./components/GalleryItem";
import FooterItem from "./components/FooterItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/styles.css";

function App() {
  return (
    <div>
      <Header />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}

export default App;
