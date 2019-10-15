import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item style={{height:"100vh",backgroundImage:"url(https://images2.minutemediacdn.com/image/upload/c_crop,h_1686,w_3000,x_0,y_157/f_auto,q_auto,w_1100/v1554703808/shape/mentalfloss/gettyimages-926597358.jpg)",backgroundSize:"cover"}}>
            <Container className="fullheightwidht" style={{display:"flex",alignItems:"center"}}>
              <Row className="fullwidht">
                <Col xs="5">
                  <Card style={{backgroundColor:"rgba(0, 0, 0, 0)",color:"#ffffff"}}>
                    <CardBody style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item style={{height:"100vh",backgroundImage:"url(http://transdeal.co.id/multer-image-upload/2.jpg)",backgroundSize:"cover"}}>
            <Container className="fullheightwidht" style={{display:"flex",alignItems:"center"}}>
              <Row className="fullwidht">
                <Col xs="5">
                  <Card style={{backgroundColor:"rgba(0, 0, 0, 0)",color:"#ffffff"}}>
                    <CardBody style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
<<<<<<< HEAD
          <Carousel.Item style={{height:"100vh",backgroundImage:"url(http://transdeal.co.id/multer-image-upload/3.jpg)",backgroundSize:"cover"}}>
=======
          <Carousel.Item style={{height:"90vh",backgroundImage:"url(https://www.yourlocalexaminer.com.au/wp-content/uploads/2016/10/CAN-Blood-donation.jpg)",backgroundSize:"100%", backgroundColor:"#00b3e6", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
>>>>>>> f061f45d03e989fb276b9a62ec2ecdb19b645c7f
            <Container className="fullheightwidht" style={{display:"flex",alignItems:"center"}}>
              <Row className="fullwidht">
                <Col xs="5">
                  <Card style={{backgroundColor:"rgba(0, 0, 0, 0)",color:"#ffffff"}}>
                    <CardBody style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      testredux: state.reducer.testredux
    };
  };
export default connect(mapStateToProps)(Homepage);
