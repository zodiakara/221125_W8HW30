import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/*
Query Parameter
sdggsdgasdg?name=Peter&name2=John

{
  name:Peter,
  name2:John
}
URL parameter

sdfsdfasdfsd/:name/:name2
sdafdsaf/Peter/John

{
  name:Peter,
  name2:John
}

*/

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  const fetchMovie = async (movieId) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=a7f77e9&i=${movieId}`
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
    fetchMovie(id);
  }, [id]);
  return (
    <div>
      {movieData.Title}
      <p>movies</p>
    </div>
  );
};
export default MovieDetails;
