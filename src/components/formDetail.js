import React, { useState } from "react";
import { withRouter,Link} from 'react-router-dom';
import axios from "axios"; 
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
  const [value, setValue] = useState({
    address: "",
    booth: "",
    large: "",
    city:"",
    province:"",
    floorplan:"",
    rundown:"",
    logo:"",
    pict:"",
    gift:"",
    description:"",
    id:id
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(value);
    
    const formData = new FormData();

    formData.append("address", value.address);
    formData.append("booth", value.booth);
    formData.append("large", value.large);
    formData.append("city", value.city);
    formData.append("province", value.province);
    formData.append("rundown", value.rundown);
    formData.append("pict", value.pict);
    formData.append("gift", value.gift);
    formData.append("description", value.description);
    formData.append("id", value.id);

    axios
      .post(`https://my-mysql-api.herokuapp.com/events/detail`, formData,  {
        headers: {
          "Access-Control-Allow-Origin": '*'
        }
      })
      .then(result => {
        alert(`Article Submit Success`)
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleImage(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.files[0],
    });
    console.log(value);
  };



  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
    console.log(value);
    
  }
  
  return (
    <Container fluid className="pad4em centercontent">
      <Row className="fullwidht">
        <Col className="mrgbtm2em" xs="12">
          <Card>
              <CardHeader className="bgblooddonor">
                  <div className="hero">        
                      <hgroup>
                          <h1>Detail Event</h1>
                      </hgroup>
                  </div>
              </CardHeader>
          </Card>
        </Col>
        <Col xs="12">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="address">Event Address</Label>
            <Row>
              <Col xs="12">
                <Input
                  type="text"
                  name="address"
                  placeholder="street, park, building or place"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label for="description">Event Description</Label>
            <Row>
              <Col xs="12">
              <Input type="textarea"
              name="description"
              id="description"
              onChange={handleChange}
              />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label for="rundown">Event Rundown</Label>
            <Row>
              <Col xs="12">
              <Input type="textarea"
              name="rundown"
              id="rundown"
              onChange={handleChange}
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
                      onChange={handleChange}
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
                  <Input type="text" name="large" placeholder="e.g 5 x 5 m  " onChange={handleChange} />
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup row>
            <Label for="pict" xs={2}>
              Upload Event Picture
            </Label>
            <Col xs={20}>
              <Input type="file" name="pict" onChange={handleImage}  />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="gift" xs={2}>
              Gift For Participant
            </Label>
            <Col xs={10}>
              <Input type="textarea" name="gift" id="gift" onChange={handleChange} />
              <FormText color="muted">
                Example : <br />
                - Marchandise from sponsor <br />
                - Healty snack
                <br />- etc
              </FormText>
            </Col>
          </FormGroup>

          <Button className="bgblooddonor" block type="submit">Submit</Button>

          <Link to="/">
              <Button className="bgblooddonor" block>
                Back To Home
              </Button>
            </Link>
        </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(FormDetail);
