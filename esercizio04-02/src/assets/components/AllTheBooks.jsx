import { Component } from "react";
import horror from "../../../data/horror.json";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {horror.map((films) => (
            <Col lg={3} className="text-center" key={`films-${films.asin}`}>
              <Card>
                <Card.Img variant="top" src={films.img} />
                <Card.Body>
                  <Card.Title>{films.Title}</Card.Title>
                  <Button variant="primary">buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
