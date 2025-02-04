import { Component } from "react";
import horror from "../../../data/horror.json";
import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    console.log("Rendering AllTheBooks component"); // Log when rendering the component
    console.log("Horror books data:", horror); // Log the horror books data

    return (
      <Container>
        <Row>
          {horror.map((books) => {
            console.log("Rendering book:", books.Title); // Log each book's title
            return (
              <Col lg={2} className="text-center" key={`books-${books.asin}`}>
                <Card>
                  <Card.Img variant="top" src={books.img} />
                  <Card.Body>
                    <Card.Text>{books.title}</Card.Text>
                    <Badge bg="secondary me-4">{books.price}€</Badge>
                    <Button variant="primary" onClick={() => console.log(`Buying book: ${books.Title}`)}>
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
