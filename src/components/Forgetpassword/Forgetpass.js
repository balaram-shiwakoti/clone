import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
export const Forgetpass = ({
  handleOnchange,
  email,
  handleResetSubmit,
  toggleHandler,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleResetSubmit} autoComplete="off">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnchange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Button className="mt-2" type="submit">
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => toggleHandler("login")}>
            Login
          </a>
        </Col>
      </Row>
    </Container>
  );
};
