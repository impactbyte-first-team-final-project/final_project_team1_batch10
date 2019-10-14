import React, { Component } from "react";
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
import image1 from "../assets/img/1.jpg";
import { connect } from "react-redux";
class EventsCard extends Component {

  participate = () => {
    if(this.props.islogin ===true){
        alert("Anda mengikuti event ini")
    } else {
        this.props.dispatch({ type: 'MODAL_LOGIN' })
    }
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader className="testcolor">
            <h1>This Month Events</h1>
          </CardHeader>
        </Card>
        <Container fluid="true">
          <Row>
            <Col className="nopad" xs="3">
              <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                  </CardTitle>
                  <CardSubtitle
                    style={{ fontFamily: "Courier", fontWeight: "bold" }}
                  >
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                  </CardText>
                  <Button className="bgblooddonor" onClick={this.participate}>
                    Ikuti
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="nopad" xs="3">
              <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                  </CardTitle>
                  <CardSubtitle
                    style={{ fontFamily: "Courier", fontWeight: "bold" }}
                  >
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="nopad" xs="3">
              <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                  </CardTitle>
                  <CardSubtitle
                    style={{ fontFamily: "Courier", fontWeight: "bold" }}
                  >
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="nopad" xs="3">
              <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                  </CardTitle>
                  <CardSubtitle
                    style={{ fontFamily: "Courier", fontWeight: "bold" }}
                  >
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Card>
          <CardHeader className="testcolor">
            <h1>Upcomming Events</h1>
          </CardHeader>
        </Card>
        <Container fluid="true">
          <Row>
            <Col className="nopad" xs="3">
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
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="nopad" xs="3">
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
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="nopad" xs="3">
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
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="nopad" xs="3">
              <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                  </CardTitle>
                  <CardSubtitle
                    style={{ fontFamily: "Courier", fontWeight: "bold" }}
                  >
                    Judul
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="bgblooddonor">Ikuti</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalLogin: state.signInReducer.modalLogin,
    islogin: state.reducer.islogin
  };
};

export default connect(mapStateToProps)(EventsCard);