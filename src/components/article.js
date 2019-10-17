import React, { useState } from "react";
import axios from "axios"; 
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
    titlearticle: "",
    bodyarticle: "",
    footerarticle: "",
    files:""
  });

  console.log(value)
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("titlearticle", value.titlearticle);
    formData.append("bodyarticle", value.bodyarticle);
    formData.append("footerarticle", value.footerarticle);
    formData.append("files", value.files);

    axios
      .post(`https://my-mysql-api.herokuapp.com/artikel`, formData,  {
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
      files: event.target.files[0],
      // previewImage: URL.createObjectURL(event.target.files[0])
    });
  };



  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }
  return (
    <Container style={{ marginBottom: "50px", padding:"0px" }}>
      <h2 style={{ textAlign: "center", marginTop: "1%" }}>
        Submit Event Article
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="titlearticle">Article Title</Label>
          <Input type="textarea" name="titlearticle" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="bodyarticle">Article Body</Label>
          <Input
            type="textarea"
            name="bodyarticle"
            style={{ height: "35vh" }}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="footerarticle">Article Footer</Label>
          <Input type="textarea" name="footerarticle" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="picture">Upload article photo</Label>
          <Input type="file" name="picture" onChange={handleImage} />
          <FormText color="muted">Upload one photo</FormText>
        </FormGroup>

        <Button className="btn-block" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
