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
      <GalleryItem
        description={"My favourite series"}
        moviesSearch={"harry%20potter"}
      />
      <GalleryItem
        description={"Christmas Specials"}
        moviesSearch={"christmas"}
      />
      <GalleryItem description={"New Releases"} moviesSearch={"jackass"} />
      <FooterItem />
    </div>
  );
}

export default App;
