import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container fluid="true" className="myfooter">
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
    </Container>
  );
}

export default Footer;