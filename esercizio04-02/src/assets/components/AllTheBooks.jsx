import { Component } from "react";
import horror from "../../../data/horror.json";
import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {horror.map((books) => (
            <Col lg={2} className="text-center" key={`films-${books.asin}`}>
              <Card>
                <Card.Img variant="top" src={books.img} />
                <Card.Body>
                  <Card.Title>{books.Title}</Card.Title>
                  <Badge bg="secondary me-3">{books.price}€</Badge>

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
