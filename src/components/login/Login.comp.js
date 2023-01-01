import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
export const Login = ({
  handleOnchange,
  email,
  password,
  handleSubmit,
  toggleHandler,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleSubmit} autoComplete="off">
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
            <Form.Group>
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnchange}
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button className="mt-2" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => toggleHandler("forget")}>
            Forget Password
          </a>
        </Col>
      </Row>
    </Container>
  );
};
