import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Register() {
  const [state, setState] = useState({
    user: { username: "", email: "", password: "" },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      user: { ...state.user, [e.target.name]: e.target.value },
    }));
  };
  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(state.user);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}>
          <Card>
            <Card.Header className="p-3" style={{ backgroundColor: "#ffc107" }}>
              <h4>Register</h4>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button type="submit" variant="warning" onClick={handleClick}>
                    Register
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
