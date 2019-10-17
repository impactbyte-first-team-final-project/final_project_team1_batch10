import React from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

function FormDetail(props) {
    
  return (
    <Container style={{ marginTop: "3%", marginLeft: "30%" }}>
      <h1 style={{ marginTop: "3%", marginLeft: "25%" }}>Detail Event</h1>
      <Form>
        <FormGroup>
          <Label for="address">Event Address</Label>
          <Row>
            <Col xs="8">
              <Input
                type="text"
                name="address"
                placeholder="street, park, building or place"
              />
            </Col>
          </Row>
        </FormGroup>

        <Row around="xs">
          <Col xs={4}>
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
          <Col xs={4}>
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

          <Col xs={4}>
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
          <Col xs={6}>
            <Input type="textarea" name="text" id="exampleText" />
            <FormText color="muted">
              Example : <br />
              - Marchandise from sponsor <br />
              - Healty snack
              <br />- etc
            </FormText>
          </Col>
        </FormGroup>

        <Button style={{ width: "66%" }}>Submit</Button>
      </Form>
    </Container>
  );
}

export default FormDetail;
