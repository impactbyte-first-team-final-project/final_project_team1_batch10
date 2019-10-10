import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";
import { Badge, Row, Col } from "reactstrap";
import Map from "./maps1";

export default function FormEo(props) {
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
    eooffice: ""
  });
  console.log(value);

  function handleSubmit(event) {
    event.preventDefault();

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
      value.eooffice === ""
    ) {
      alert("Please complete fill the form");
    } else {
      axios
        .post(`https://my-mysql-api.herokuapp.com/events`, value, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(result => {
          alert(`Permintaan event anda berhasil, harap menunggu konfirmasi`);
        })
        .catch(error => {
          console.log(error);
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

  return (
    <Container style={{ marginTop: "3%", marginLeft: "32%" }}>
      <h1 style={{ marginTop: "3%", marginLeft: "8%" }}>Sign Up Your Event</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="namaevents">Event Name</Label>
          <Row>
            <Col sm="6">
              <Input
                type="text"
                name="namaevents"
                placeholder="e.g Hammersonic Music festival"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </FormGroup>

        <Row between="xs">
          <Col xs={3}>
            <FormGroup>
              <Label for="startdate">Event Start Date</Label>
              <Row>
                <Col sm="12">
                  <Input
                    type="date"
                    name="startdate"
                    placeholder="date placeholder"
                    onChange={handleDateStart}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>

          <Col xs={3}>
            <FormGroup>
              <Label for="eenddate">Event Finish Date</Label>
              <Row>
                <Col sm="12">
                  <Input
                    type="date"
                    name="enddate"
                    placeholder="date placeholder"
                    onChange={handleDateFinish}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <Row between="xs">
          <Col xs={3}>
            <FormGroup>
              <Label for="starttime">Event Start Time</Label>
              <Row>
                <Col sm="12">
                  <Input
                    type="time"
                    name="startTime"
                    placeholder="time placeholder"
                    onChange={handleStartTime}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>

          <Col xs={3}>
            <FormGroup>
              <Label for="endtime">Event Finish Time</Label>
              <Row>
                <Col sm="12">
                  <Input
                    type="time"
                    name="endtime"
                    placeholder="time placeholder"
                    onChange={handleFinishTime}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="eventlocation">Event Location</Label>
          <Row>
            <Col sm="6">
              <Input
                type="textarea"
                name="eventlocation"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </FormGroup>
{/* 
        <FormGroup>
           <Map />
        </FormGroup> */}

        <FormGroup>
          <Label for="eoname">Event Organizer Name</Label>
          <Row>
            <Col sm="6">
              <Input
                type="text"
                name="eoname"
                placeholder=""
                onChange={handleChange}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Label for="pic">Person In Charge (PIC)</Label>
          <Row>
            <Col sm="6">
              <Input
                type="name"
                name="pic"
                placeholder=""
                onChange={handleChange}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Label for="picphone">Phone Number</Label>
          <Row>
            <Col sm="6">
              <Input
                type="phoneNumber"
                name="picphone"
                placeholder=""
                onChange={handleChange}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Label for="eooffice">EO Office Address</Label>
          <Row>
            <Col sm="6">
              <Input type="textarea" name="eooffice" onChange={handleChange} />
            </Col>
          </Row>
        </FormGroup>

        <Button style={{ width: "49%" }} onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
