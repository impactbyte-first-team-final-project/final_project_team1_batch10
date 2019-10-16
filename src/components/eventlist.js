import React, { Component } from 'react'
import { withRouter} from 'react-router-dom';
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
  Col,
  Pagination, 
  PaginationItem, 
  PaginationLink
} from "reactstrap";
import image1 from "../assets/img/1.jpg";

class Eventlist extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{padding:"1em"}}>
                    <Row>
                        <Col xs="4">
                            <Card>
                                <CardHeader>
                                <Row>
                                    <Col xs="12">
                                    <h3><i class="fa fa-filter" aria-hidden="true"></i> Filter event</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                    </Col>
                                </Row>
                                </CardHeader>
                            </Card>
                        </Col>
                        <Col xs="8">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xs="4">
                                            <Card className="mrgtopbtm1em">
                                                <CardImg top width="100%" src={image1} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                                                    Name Events
                                                    </CardTitle>
                                                    <CardSubtitle
                                                    style={{
                                                        fontFamily: "Times New Roman",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                                                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                                                    </p>
                                                    </CardSubtitle>
                                                    <CardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content content.
                                                    </CardText>
                                                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                                                        pathname: '/eventdetail',
                                                        state: { idevent: 333 }
                                                        })}>Lihat detail event</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="4">
                                            <Card className="mrgtopbtm1em">
                                                <CardImg top width="100%" src={image1} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                                                    Name Events
                                                    </CardTitle>
                                                    <CardSubtitle
                                                    style={{
                                                        fontFamily: "Times New Roman",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                                                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                                                    </p>
                                                    </CardSubtitle>
                                                    <CardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content content.
                                                    </CardText>
                                                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                                                        pathname: '/eventdetail',
                                                        state: { idevent: 333 }
                                                        })}>Lihat detail event</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="4">
                                            <Card className="mrgtopbtm1em">
                                                <CardImg top width="100%" src={image1} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                                                    Name Events
                                                    </CardTitle>
                                                    <CardSubtitle
                                                    style={{
                                                        fontFamily: "Times New Roman",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                                                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                                                    </p>
                                                    </CardSubtitle>
                                                    <CardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content content.
                                                    </CardText>
                                                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                                                        pathname: '/eventdetail',
                                                        state: { idevent: 333 }
                                                        })}>Lihat detail event</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="4">
                                            <Card className="mrgtopbtm1em">
                                                <CardImg top width="100%" src={image1} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                                                    Name Events
                                                    </CardTitle>
                                                    <CardSubtitle
                                                    style={{
                                                        fontFamily: "Times New Roman",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                                                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                                                    </p>
                                                    </CardSubtitle>
                                                    <CardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content content.
                                                    </CardText>
                                                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                                                        pathname: '/eventdetail',
                                                        state: { idevent: 333 }
                                                        })}>Lihat detail event</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="4">
                                            <Card className="mrgtopbtm1em">
                                                <CardImg top width="100%" src={image1} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                                                    Name Events
                                                    </CardTitle>
                                                    <CardSubtitle
                                                    style={{
                                                        fontFamily: "Times New Roman",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                                                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                                                    </p>
                                                    </CardSubtitle>
                                                    <CardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content content.
                                                    </CardText>
                                                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                                                        pathname: '/eventdetail',
                                                        state: { idevent: 333 }
                                                        })}>Lihat detail event</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="4">
                                            <Card className="mrgtopbtm1em">
                                                <CardImg top width="100%" src={image1} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                                                    Name Events
                                                    </CardTitle>
                                                    <CardSubtitle
                                                    style={{
                                                        fontFamily: "Times New Roman",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <p>
                                                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                                                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                                                    </p>
                                                    </CardSubtitle>
                                                    <CardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content content.
                                                    </CardText>
                                                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                                                        pathname: '/eventdetail',
                                                        state: { idevent: 333 }
                                                        })}>Lihat detail event</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" className="centercontent">
                                            <Pagination aria-label="Page navigation example">
                                                <PaginationItem>
                                                    <PaginationLink first href="#" />
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink previous href="#" />
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                    1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                    2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                    3
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                    4
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                    5
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink next href="#" />
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink last href="#" />
                                                </PaginationItem>
                                            </Pagination>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
export default withRouter(Eventlist);
