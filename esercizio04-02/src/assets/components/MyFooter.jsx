import { Card } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Card className="text-center bg-dark text-light">
      <Card.Header>Avviso</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>Nessuno mai arriverà al footer.</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Scorri pure su</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default MyFooter;
