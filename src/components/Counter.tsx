import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Counter() {
  const [count, setState] = useState(0);

  const increment = () => {
    setState((state) => state + 1);
  };
  const decrement = () => {
    setState((state) => state - 1);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <p className="display-2">{count}</p>
              <Button className="m-1" variant="success" onClick={increment}>
                Increment
              </Button>
              <Button className="m-1" variant="warning" onClick={decrement}>
                Decrement
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
