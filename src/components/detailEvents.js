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
      id_user: [],
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

    axios
      .post(`https://my-mysql-api.herokuapp.com/events/id`, id)
      .then(response => {
        // console.log(response, "fffff");

        this.setState({
          namaevents: response.data.result[0].namaevents,
          startdateevents: response.data.result[0].startdateevents,
          eoname: response.data.result[0].eoname,
          starttimeevents: response.data.result[0].starttimeevents,
          endtimeevents: response.data.result[0].endtimeevents,
          city: response.data.result[0].city,
          bootorroomname: response.data.result[0].bootorroomname,
          eventpict: response.data.result[0].eventpict,
          boothorroomlarge: response.data.result[0].boothorroomlarge,
          eventpict: response.data.result[0].eventpict,
          eventdescription: response.data.result[0].eventdescription,
          province: response.data.result[0].province,
          rundown: response.data.result[0].rundown,
          floorplan: response.data.result[0].floorplan,
          id_user: response.data.result[0].id_user.split(",")
        });
      })
      .then(() => console.log(this.state.id_user))
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
      console.log(this.state.id_user);
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
    console.log(this.props.userinfo.id_user);
    // let cekparticipation = this.state.id_user.find(this.props.userinfo.id_user);
    // console.log(cekparticipation);

    return (
      <div>
        <Container fluid style={{ padding: "3em" }}>
          <Row>
            <Col xs="8">
              <img
                src={this.state.eventpict}
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs="4">
              <Row>
                <Col xs="12">
                  <h5
                    style={{
                      color: "#fd7e14",
                      fontFamily: "sans-serif",
                      textTransform: "uppercase",
                      fontSize: "25px",
                      fontWeight: "bolder"
                    }}
                  >
                    {this.state.namaevents}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Diselenggarakan oleh
                  </h5>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize"
                    }}
                  >{` ${this.state.eoname}`}</h5>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <p>
                    <h5
                      style={{
                        fontSize: "15px",
                        textTransform: "capitalize",
                        fontWeight: "bold"
                      }}
                    >
                      Tanggal dan waktu
                    </h5>
                  </p>

                  <i className="fa fa-calendar" aria-hidden="true"></i>

                  <p>{this.state.startdateevents}</p>

                  <br />
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  <p>
                    {this.state.starttimeevents} - {this.state.endtimeevents}`
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Lokasi
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col
                  xs="6"
                  style={{
                    fontSize: "15px",
                    textTransform: "capitalize",
                    fontWeight: "bold"
                  }}
                >
                  kota:
                  <h5
                    style={{
                      fontSize: "15px"
                    }}
                  >
                    {" "}
                    {this.state.city}
                  </h5>
                </Col>
                <Col
                  xs="6"
                  style={{
                    fontSize: "15px",
                    textTransform: "capitalize",
                    fontWeight: "bold"
                  }}
                >
                  Provinsi:{" "}
                  <h5
                    style={{
                      fontSize: "15px"
                    }}
                  >
                    {this.state.province}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Nama booth atau ruangan
                  </h5>
                  anggrek
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Ukuran booth atau ruangan
                  </h5>
                  3x3 M
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Gift For Participant
                  </h5>
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
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Description
                  </h5>
                  <p>
                    <h5>{this.state.eventdescription}</h5>
                  </p>
                </Col>
                <Col xs="12">
                  <h5
                    style={{
                      fontSize: "15px",
                      textTransform: "capitalize",
                      fontWeight: "bold"
                    }}
                  >
                    Rundown event
                  </h5>
                  <p>{this.state.rundown}</p>
                </Col>
              </Row>
            </Col>
            <Col xs="4">
              <h5
                style={{
                  fontSize: "15px",
                  textTransform: "capitalize",
                  fontWeight: "bold"
                }}
              >
                Denah
              </h5>
              <p>{this.state.floorplan}</p>
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
                  <Button
                    className="bgblooddonor"
                    id="toggler"
                    style={{ marginBottom: "1rem" }}
                    onClick={this.participate}
                    block
                  >
                    Ikuti event ini
                  </Button>
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
