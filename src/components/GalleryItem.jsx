import SingleMovie from "./SingleMovie";
import React from "react";
import { Carousel, CarouselItem, Col, Row } from "react-bootstrap";

// let uri = `http://www.omdbapi.com/?i=tt3896198&apikey=a7f77e9`;
// let search = "harry%20potter";

class GalleryItem extends React.Component {
  state = {
    movies: [[], []],
    isLoading: true,
    isError: false,
  };

  searchMovies = async () => {
    try {
      let uri = `http://www.omdbapi.com/?i=tt3896198&apikey=a7f77e9&s=${this.props.moviesSearch}`;
      let response = await fetch(uri);

      if (response.ok) {
        let movies = await response.json();
        let movieChunk = 6;

        const moviesChunked = movies.Search.reduce(
          (movieArray, item, index) => {
            const chunkIndex = Math.floor(index / movieChunk);

            if (!movieArray[chunkIndex]) {
              movieArray[chunkIndex] = [];
            }

            movieArray[chunkIndex].push(item);

            return movieArray;
          },
          []
        );

        console.log(moviesChunked);

        this.setState({
          ...this.state,
          isLoading: false,
          movies: moviesChunked,
        });
      } else {
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        ...this.state,
        isError: true,
        isLoading: false,
      });
    }
  };
  componentDidMount() {
    this.searchMovies();
  }

  render() {
    return (
      <Carousel>
        <h2 className="galleryHeader my-2">{this.props.description}</h2>

        {this.state.movies.map((movies) => (
          <CarouselItem>
            <div className="row">
              <Row>
                {movies.map((movie) => (
                  <Col md={2}>
                    <SingleMovie title={movie.Title} img={movie.Poster} />
                  </Col>
                ))}
              </Row>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    );
  }
}
export default GalleryItem;
