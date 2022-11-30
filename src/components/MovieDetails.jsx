import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieID } = useParams();

  const fetchMovie = async (id) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=a7f77e9&s=&i${id}`
      );

      if (response.ok) {
        let data = await response.json();
        setMovieData(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovie(movieID);
  }, [movieID]);
  return (
    <div>
      {movieData.Title}
      <p>movies</p>
    </div>
  );
};
export default MovieDetails;
