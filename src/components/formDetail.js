import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useParams} from 'react-router-dom';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Card,
  CardHeader
} from "reactstrap";

function FormDetail(props) {
  let {id} = useParams()
  console.log(id);
  
  return (
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
        <Form>
          <FormGroup>
            <Label for="address">Event Address</Label>
            <Row>
              <Col xs="12">
                <Input
                  type="text"
                  name="address"
                  placeholder="street, park, building or place"
                />
              </Col>
            </Row>
          </FormGroup>

          <Row around="xs">
            <Col xs={6}>
              <FormGroup>
                <Label for="booth">Booth or room name</Label>
                <Row>
                  <Col xs="12">
                    <Input
                      type="text"
                      name="booth"
                      placeholder="e.g Booth no.15A"
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            <FormGroup>
            <Col xs={12}>
              <Label for="large">
                Booth or room dimension (Wide x Long in meters){" "}
              </Label>
              <Row>
                <Col xs="12">
                  <Input type="text" name="large" placeholder="e.g 5 x 5 m  " />
                </Col>
              </Row>
              </Col>
            </FormGroup>
          </Row>

          <Row around="xs">
            <Col xs={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Row>
                  <Col xs="12">
                    <Input
                      type="text"
                      name="city"
                      placeholder="e.g Jakarta Selatan"
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            <Col xs={6}>
              <FormGroup>
                <Label for="province">Province</Label>
                <Row>
                  <Col xs="12">
                    <Input
                      type="text"
                      name="province"
                      placeholder="e.g DKI Jakarta"
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup row>
            <Label for="floorplan" xs={2}>
              Floor Plan (Optional)
            </Label>
            <Col xs={20}>
              <Input type="file" name="floorplan" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="rundown" xs={2}>
              Upload Event Rundown
            </Label>
            <Col xs={20}>
              <Input type="file" name="rundown" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="logo" xs={2}>
              Upload Event Logo
            </Label>
            <Col xs={20}>
              <Input type="file" name="rundown" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" xs={2}>
              Gift For Participant
            </Label>
            <Col xs={10}>
              <Input type="textarea" name="text" id="exampleText" />
              <FormText color="muted">
                Example : <br />
                - Marchandise from sponsor <br />
                - Healty snack
                <br />- etc
              </FormText>
            </Col>
          </FormGroup>

          <Button block>Submit</Button>
        </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormDetail;
