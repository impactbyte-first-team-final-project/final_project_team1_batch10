import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter} from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardHeader
} from "reactstrap";
import { Row, Col } from "reactstrap";
import {
  Link
} from "react-router-dom";

function FormEo(props) {
  const [value, setValue] = useState({
    namaevents: "",
    startdate: "",
    enddate: "",
    starttime: "",
    endtime: "",
    eventlocation: "",
    eoname: "",
    pic: "",
    picphone: "",
    picemail: "",
    eooffice: ""
  });
  console.log(value);

  function handleSubmit(event) {
    event.preventDefault();
    props.dispatch({ type: "LOADINGTOGGLE" });

    if (
      value.namaevents === "" ||
      value.startdate === "" ||
      value.enddate === "" ||
      value.starttime === "" ||
      value.endtime === "" ||
      value.eventlocation === "" ||
      value.eoname === "" ||
      value.pic === "" ||
      value.picphone === "" ||
      value.picemail === "" ||
      value.eooffice === ""
    ) {
      alert("Please complete fill the form");
      props.dispatch({ type: "LOADINGTOGGLE" });
    } else {
      axios
        .post(`https://my-mysql-api.herokuapp.com/events`, value, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(result => {
          alert(`Permintaan event anda berhasil dikirim, harap menunggu konfirmasi persetujuan event di email anda`);
          setValue({
            namaevents: "",
            startdate: "",
            enddate: "",
            starttime: "",
            endtime: "",
            eventlocation: "",
            eoname: "",
            pic: "",
            picphone: "",
            picemail: "",
            eooffice: ""
          });
          props.dispatch({ type: "LOADINGTOGGLE" });
          props.history.push({pathname: '/'});
        })
        .catch(error => {
          console.log(error);
          props.dispatch({ type: "LOADINGTOGGLE" });
        });
    }
  }

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }

  function handleDateStart(event) {
    setValue({
      ...value,
      startdate: event.target.value
    });
  }

  function handleDateFinish(event) {
    setValue({
      ...value,
      enddate: event.target.value
    });
  }

  function handleStartTime(event) {
    setValue({
      ...value,
      starttime: event.target.value
    });
  }

  function handleFinishTime(event) {
    setValue({
      ...value,
      endtime: event.target.value
    });
  }
  console.log(props);
  
  return (
    <div>
    <Container fluid className="pad4em centercontent">
      <Row className="fullwidht">
        <Col className="mrgbtm2em" xs="12">
          <Card>
              <CardHeader className="bgblooddonor">
                  <div className="hero">        
                      <hgroup>
                          <h1>Sign Up Your Event</h1>        
                      </hgroup>
                  </div>
              </CardHeader>
          </Card>
        </Col>
        <Col xs="12">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="namaevents">Event Name</Label>
              <Row>
                <Col xs="12">
                  <Input
                    type="text"
                    name="namaevents"
                    placeholder="e.g Hammersonic Music festival"
                    onChange={handleChange}
                    block
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <Row between="xs">
              <Col xs="12">
                <FormGroup>
                  <Label for="startdate">Event Start Date</Label>
                  <Row>
                    <Col xs="12">
                      <Input
                        type="date"
                        name="startdate"
                        placeholder="date placeholder"
                        onChange={handleDateStart}
                        required
                      />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>

              <Col xs="12">
                <FormGroup>
                  <Label for="eenddate">Event Finish Date</Label>
                  <Row>
                    <Col xs="12">
                      <Input
                        type="date"
                        name="enddate"
                        placeholder="date placeholder"
                        onChange={handleDateFinish}
                        required
                      />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>

            <Row between="xs">
              <Col xs="12">
                <FormGroup>
                  <Label for="starttime">Event Start Time</Label>
                  <Row>
                    <Col xs="12">
                      <Input
                        type="time"
                        name="startTime"
                        placeholder="time placeholder"
                        onChange={handleStartTime}
                        required
                      />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>

              <Col xs="12">
                <FormGroup>
                  <Label for="endtime">Event Finish Time</Label>
                  <Row>
                    <Col xs="12">
                      <Input
                        type="time"
                        name="endtime"
                        placeholder="time placeholder"
                        onChange={handleFinishTime}
                        required
                      />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="eventlocation">Event Location</Label>
              <Row>
                <Col xs="12">
                  <Input
                    type="textarea"
                    name="eventlocation"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label for="eoname">Event Organizer Name</Label>
              <Row>
                <Col xs="12">
                  <Input
                    type="text"
                    name="eoname"
                    placeholder=""
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label for="pic">Person In Charge (PIC)</Label>
              <Row>
                <Col xs="12">
                  <Input
                    type="name"
                    name="pic"
                    placeholder=""
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label for="picphone">PIC Phone Number</Label>
              <Row>
                <Col xs="12">
                  <Input
                    type="phoneNumber"
                    name="picphone"
                    placeholder=""
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label for="picphone">PIC Email</Label>
              <Row>
                <Col xs="12">
                  <Input
                    type="email"
                    name="picemail"
                    placeholder=""
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label for="eooffice">EO Office Address</Label>
              <Row>
                <Col xs="12">
                  <Input type="textarea" name="eooffice" onChange={handleChange} required/>
                </Col>
              </Row>
            </FormGroup>
            <Button className="bgblooddonor" block type="submit">
              Submit
            </Button>
            <Link to="/">
              <Button className="bgblooddonor" block>
                Back To Home
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default connect()(withRouter(FormEo));