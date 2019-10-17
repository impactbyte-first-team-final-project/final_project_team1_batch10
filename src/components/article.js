import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Form
} from "reactstrap";

export default function Article(props) {
  const [value, setValue] = useState({
    title: "",
    body: "",
    footer: ""
  });
  // console.log(value)
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }
  return (
    <Container style={{ marginBottom: "50px" }}>
      <h2 style={{ textAlign: "center", marginTop: "5%" }}>
        Submit Event Article
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Article Title</Label>
          <Input type="textarea" name="title" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="body">Article Body</Label>
          <Input
            type="textarea"
            name="body"
            style={{ height: "35vh" }}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="footer">Article Footer</Label>
          <Input type="textarea" name="footer" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="picture">Upload article photo</Label>
          <Input type="file" name="picture" />
          <FormText color="muted">Upload one photo</FormText>
        </FormGroup>

        <Button className="btn-block" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
