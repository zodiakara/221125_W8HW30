import GalleryItem from "./GalleryItem";

const MoviesPage = () => {
  return (
    <>
      <GalleryItem
        description={"My favorite series"}
        moviesSearch={"harry%20potter"}
      />
      <GalleryItem
        description={"Christmas Specials"}
        moviesSearch={"christmas"}
      />
      <GalleryItem description={"Comedy"} moviesSearch={"jackass"} />
    </>
  );
};

export default MoviesPage;
