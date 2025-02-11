import { Button, Card } from "react-bootstrap";
import horror from "../../../data/horror.json";

const SingleBook = (props) => {
  console.log(props);
  return (
    <container>
      <row>
        <col>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{horror.img}</Card.Title>

              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </col>
      </row>
    </container>
  );
};

export default SingleBook;
