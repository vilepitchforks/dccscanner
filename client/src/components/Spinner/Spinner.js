import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const Spnr = () => {
  return (
    <Container fluid>
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <Col md={{ span: 1, offset: 6 }}>
          <Spinner animation="grow" />
        </Col>
      </Row>
    </Container>
  );
};

export default Spnr;
