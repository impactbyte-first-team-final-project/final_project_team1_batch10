import React, { useState } from "react";
import axios from "axios"; 
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function SignIn(props) {
  const [value, setValue] = useState({ email: "", passuser: "" });

  function handleSubmit(event) {
    event.preventDefault(props);
   
  }

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="" onChange={handleChange}  />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="" onChange={handleChange} />
      </FormGroup>
      <Button className="btn-block" onClick={handleSubmit} >Submit</Button>
    </Form>
  );
}
