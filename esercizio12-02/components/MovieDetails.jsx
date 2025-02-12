import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (movieID) {
      fetch(`http://www.omdbapi.com/?apikey=65f4a0b3&i=${movieID}`)
        .then((response) => response.json())
        .then((data) => setMovieDetails(data))
        .catch((error) => console.error("Error fetching movie details:", error));
    }
  }, [movieID]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={movieDetails.Poster} />
            <Card.Body>
              <Card.Title>{movieDetails.Title}</Card.Title>
              <Card.Text>{movieDetails.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
