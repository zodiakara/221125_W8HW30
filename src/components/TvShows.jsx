import { Container, Row } from "react-bootstrap";
import GalleryItem from "./GalleryItem";
import office from "../assets/series.JPG";

const TvShows = () => {
  return (
    <div>
      <h2>Top pick for You:</h2>
      <div>
        <Container>
          <Row className="d-flex justify-content-space-around my-4">
            <div className="col-8">
              <h5>The Office</h5>
              <p>
                The mockumentary about a quirky paper supply company in
                Scranton, Pennsylvania created a patchwork of iconic jokes and
                characters that captured fans' hearts and continues to even over
                a decade after its air date.
              </p>
              <img src={office} alt="the-office" />
            </div>
          </Row>
        </Container>
        <GalleryItem description={"Series to watch"} moviesSearch={"series"} />
      </div>
    </div>
  );
};

export default TvShows;
