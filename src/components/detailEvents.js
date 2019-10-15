import React, { Component } from "react";
import { withRouter} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import img1 from "../assets/img/testimag.jpg";
import { connect } from "react-redux";

class DetailEvents extends Component {
  constructor(props) {
      super(props);
    }
    backtohome = ()=>{
      this.props.history.push({
          pathname: '/'
        })
    }
    participate = () => {
      if(this.props.islogin ===true){
          alert("Anda mengikuti event ini")
      } else {
          this.props.dispatch({ type: 'MODAL_LOGIN' })
      }
    };
  render() {
    console.log(this.props.location);
    
    return (
      <div>
        <Container fluid="true" style={{padding:"3em"}}>
          <Row>
            <Col xs="8">
              <img src={img1} alt="" style={{ width: "100%" }} />
            </Col>
            <Col xs="4">
              <Row>
                <Col xs="12"><h1 style={{ fontSize: "3em",color: "red"}}>NAMA EVENT</h1></Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Diselenggarakan oleh</h5>
                  <i class="fa fa-users" aria-hidden="true"> Danone Group</i>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Tanggal dan waktu</h5>
                  <i class="fa fa-calendar" aria-hidden="true"> 29 Okt 2019 - 29 Okt 2019</i><br />
                  <i class="fa fa-clock-o" aria-hidden="true"> 08:00 - 17:00 WIB</i>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h5>Lokasi</h5>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  kota:
                </Col>
                <Col xs="6">
                  provinsi:
                </Col>
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
          <Row style={{marginTop:"2em"}}>
            <Col xs="8">
              <Row>
                <Col xs="12">
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
                </Col>
                <Col xs="12">
                  <h5>Rundown event</h5>
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
                </Col>
              </Row>
            </Col>
            <Col xs="4">
              <h5>Denah</h5>
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
    islogin: state.reducer.islogin
  };
};

export default connect(mapStateToProps)(withRouter(DetailEvents));