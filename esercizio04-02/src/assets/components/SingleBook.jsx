import { Button, Card, Container, Row, Col } from "react-bootstrap";

const SingleBook = (prop) => {
  return (
    <Container>
      <Row>
        <Col lg={2} className="text-center">
          <Card>
            <Card.Img variant="top" src={prop.src} />
            <Card.Body>
              <Card.Title>{prop.cardtitle}</Card.Title>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
