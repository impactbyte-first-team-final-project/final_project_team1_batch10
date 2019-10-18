import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import img1 from "../assets/img/testimag.jpg";
import { connect } from "react-redux";
import axios from "axios";

class DetailEvents extends Component {
  state = {
    data: {
      idevents: "",
      namaevents: "",
      startdateevents: "",
      enddateevents: "",
      starttimeevents: "",
      endtimeevents: "",
      eventlocation: "",
      eoname: "",
      pic: "",
      picphone: "",
      picemail: "",
      eooffice: "",
      approvalstatusevents: "",
      id_user: "",
      event_address: "",
      bootorroomname: "",
      boothorroomlarge: "",
      city: "",
      province: "",
      floorplan: "",
      rundown: "",
      eventlogo: "",
      eventgift: "",
      eventDetail: {}
    }
  };

  componentDidMount() {
    const id = { idevent: this.props.match.params.id };

    console.log(id);

    axios
      .post(`https://my-mysql-api.herokuapp.com/events/id`, id)
      .then(response => {
        console.log(response, "fffff");

        this.setState({
          namaevents: response.data.result[0].namaevents,
          startdateevents: response.data.result[0].startdateevents,
          eoname: response.data.result[0].eoname,
          starttimeevents: response.data.result[0].starttimeevents,
          endtimeevents: response.data.result[0].endtimeevents,
          city: response.data.result[0].city,
          bootorroomname: response.data.result[0].bootorroomname,
          eventpict: response.data.result[0].eventpict,
          boothorroomlarge: response.data.result[0].boothorroomlarge
        });
        console.log(response.data[0]);
      })
      .catch(error => {});
  }

  backtohome = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  participate = () => {
    const value = {
      idevent: this.props.match.params.id,
      iduser: this.props.userinfo.id_user
    };

    if (this.props.islogin === true) {
      axios
        .post(` https://my-mysql-api.herokuapp.com/events/participate`, value, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(result => {
          alert(`Anda telah terdaftar!`);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.props.dispatch({ type: "MODAL_LOGIN" });
    }
  };

  render() {
    console.log(this.props.match.params.id);
    console.log(true);

    return (
      <div>
        <Container fluid style={{ padding: "3em" }}>
          <Row>
            <Col xs="8">
              <img src={img1} alt="" style={{ width: "100%" }} />
            </Col>
            <Col xs="4">
              <Row>
                <Col xs="12">
                  <h1 style={{ fontSize: "3em", color: "red" }}>
                    {this.state.namaevents}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Diselenggarakan oleh</h5>
                  <i className="fa fa-users" aria-hidden="true">
                    {this.state.eoname}
                  </i>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Tanggal dan waktu</h5>
                  <p>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </p>
                  <p>{this.state.startdateevents}</p>

                  <br />
                  <p>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {this.state.starttimeevents} - {this.state.endtimeevents}`
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Lokasi</h5>
                </Col>
              </Row>
              <Row>
                <Col xs="6">kota: {this.state.city}</Col>
                <Col xs="6">provinsi:</Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Nama booth atau ruangan</h5>
                  anggrek
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Ukuran booth atau ruangan</h5>
                  3x3 M
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Gift For Participant</h5>
                  susu beruang
                </Col>
              </Row>
              {/* <h1 style={{ fontSize: "100px" }}>{this.props.location.state.idevent}</h1> */}
            </Col>
          </Row>
          <Row style={{ marginTop: "2em" }}>
            <Col xs="8">
              <Row>
                <Col xs="12">
                  <h5>Description</h5>
                  <p>
                    It is the grandiose vision of the Dream World Wide program
                    to allow learning of the original Arabic language of the
                    Quran easy to learn and accessible regardless of a person's
                    language of origin. We want to empower as many students and
                    teachers around the world as possible with our unprecedented
                    Qur'anic language curriculum and hope to create a worldwide
                    network of students that learn from each other and their
                    instructions and remain connected indefinitely. Join us
                    today to begin your journey!
                  </p>
                </Col>
                <Col xs="12">
                  <h5>Rundown event</h5>
                  <p>
                    It is the grandiose vision of the Dream World Wide program
                    to allow learning of the original Arabic language of the
                    Quran easy to learn and accessible regardless of a person's
                    language of origin. We want to empower as many students and
                    teachers around the world as possible with our unprecedented
                    Qur'anic language curriculum and hope to create a worldwide
                    network of students that learn from each other and their
                    instructions and remain connected indefinitely. Join us
                    today to begin your journey!
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs="4">
              <h5>Denah</h5>
              <p>
                It is the grandiose vision of the Dream World Wide program to
                allow learning of the original Arabic language of the Quran easy
                to learn and accessible regardless of a person's language of
                origin. We want to empower as many students and teachers around
                the world as possible with our unprecedented Qur'anic language
                curriculum and hope to create a worldwide network of students
                that learn from each other and their instructions and remain
                connected indefinitely. Join us today to begin your journey!
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Row>
                <Col xs="6">
                  <Button
                    className="bgblooddonor"
                    id="toggler"
                    style={{ marginBottom: "1rem" }}
                    onClick={this.backtohome}
                    block
                  >
                    Kembali Kehalaman awal
                  </Button>
                </Col>
                <Col xs="6">
                  {this.state.participate ? (
                    <Button
                      className="bgblooddonor"
                      id="toggler"
                      style={{ marginBottom: "1rem" }}
                      onClick={this.participate}
                      block
                    >
                      Ikuti event ini
                    </Button>
                  ) : null}
                </Col>
              </Row>
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
    islogin: state.reducer.islogin,
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(withRouter(DetailEvents));
