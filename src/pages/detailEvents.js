import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse
} from "reactstrap";
import img1 from "../assets/img/1.jpg";

export default class detailEvents extends Component {
  render() {
    return (
      <body>
        <div style={{ background: "cover" }}>
          <Container>
            <Row>
              <Col xs="8">
                <img src={img1} alt="" style={{ width: "100%" }} />
              </Col>
              <Col xs="4">
                <h1 style={{ fontSize: "100px" }}>Halo</h1>
                <p>Nama Saya Guntur</p>
                <Button
                  color="primary"
                  id="toggler"
                  style={{ marginBottom: "1rem" }}
                >
                  Follow
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card>
                    <CardBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt magni, voluptas debitis similique porro a
                      molestias consequuntur earum odio officiis natus, amet
                      hic, iste sed dignissimos esse fuga! Minus, alias.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </Col>
            </Row>
            <Row>
              <Col xs="8">
                <h1 style={{ color: "red" }}>Nama Events</h1>
                <h5>Description</h5>
                <p>
                  It is the grandiose vision of the Dream World Wide program to
                  allow learning of the original Arabic language of the Quran
                  easy to learn and accessible regardless of a person's language
                  of origin. We want to empower as many students and teachers
                  around the world as possible with our unprecedented Qur'anic
                  language curriculum and hope to create a worldwide network of
                  students that learn from each other and their instructions and
                  remain connected indefinitely. Join us today to begin your
                  journey!
                </p>
                <i class="fa fa-map-marker" aria-hidden="true">
                  Location
                </i>
                <p>
                  <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
                  <h6>Open Gate: 7 PM - 10 PM</h6>
                </p>
              </Col>
              <Col xs="4">
                <h5>Jumlah Kantong Darah</h5>
                <p>80 Kantong darah</p>
                <h5>Save The Date And Time</h5>
                <i class="fa fa-calendar" aria-hidden="true">
                  Wed, Nov 20, 2019, 7:00 PM
                </i>
              </Col>
            </Row>

            <Row>
              <Col xs="8"></Col>
            </Row>
          </Container>
        </div>
      </body>
    );
  }
}
