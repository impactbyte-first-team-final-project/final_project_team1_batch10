import React, { Component } from "react";
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
  Col
} from "reactstrap";
import image1 from "../assets/img/1.jpg";
import { connect } from "react-redux";
import Upcomingevent from "./upcomingevent";
import Thismonthevent from "./thismonthevents";
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
            <Row className="fullwidht">
              <Col xs="10"><h1>This Month Events</h1></Col>
              <Col xs="2" className="PointerKursor itemaligncenter justcontentright" onClick={() => this.props.history.push({pathname: '/eventlist'})}><span>See More ...</span></Col>
            </Row>
          </CardHeader>
        </Card>
        <Card className="centercontent">
          <CardBody style={{width:"99%"}}>
            <Thismonthevent />
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="testcolor">
            <Row className="fullwidht">
              <Col xs="10"><h1>Upcomming Events</h1></Col>
              <Col xs="2" className="PointerKursor itemaligncenter justcontentright" onClick={() => this.props.history.push({pathname: '/eventlist'})}><span>See More ...</span></Col>
            </Row>
          </CardHeader>
        </Card>
        <Card className="centercontent">
          <CardBody style={{width:"99%"}}>
            <Upcomingevent />
          </CardBody>
        </Card>
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

export default connect(mapStateToProps)(withRouter(EventsCard));
