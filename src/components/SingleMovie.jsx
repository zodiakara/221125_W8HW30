import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  return (
    <Link to={`/details/${props.id}`} className="movie-link">
      {/* <Card.Title>{props.title}</Card.Title> */}
      <Card.Img
        className="img-fluid"
        variant="top"
        style={{ height: "20rem" }}
        src={props.img}
        alt={props.title}
      />
    </Link>
  );
};

export default SingleMovie;
