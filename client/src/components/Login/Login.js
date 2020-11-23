import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { useAuthContext } from "../../lib/context/authCcontext.js";
import { authDriver } from "../../lib/drivers/restDrivers.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  const { setAuth } = useAuthContext();

  const handleSubmit = async e => {
    e.preventDefault();
    setCheck(false);

    const auth = await authDriver({ email });

    auth ? setAuth("yes") : setCheck(true);
  };

  return (
    <Container fluid="md">
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <Col md={{ span: 4, offset: 4 }} style={{ minWidth: "350px" }}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onInput={e => setEmail(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  Enter
                </Button>
              </InputGroup.Append>
              {check && (
                <Form.Text
                  className="text-danger"
                  style={{ position: "absolute", top: "100%" }}
                >
                  Unauthorized email
                </Form.Text>
              )}
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
