import React from 'react';
import { Container, Row, Col,NavbarBrand } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container fluid className="bgblooddonor">
      <Row>
        <Col className="justcontentleft itemaligncenter" xs="2"><NavbarBrand href="/" style={{color:"#fff"}}>BLOODDONORS</NavbarBrand></Col>
        <Col className="justcontentleft itemaligncenter text-white" xs="10">© 2019 Copyright:<a className="text-white" href="https://blooddonors.com/"> blooddonors.com</a></Col>
      </Row>
    </Container>
  );
}

export default Footer;