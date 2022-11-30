import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  return (
    <Link className="movie-link">
      <Card.Title>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.img} alt={props.title} />
    </Link>
  );
};

export default SingleMovie;
