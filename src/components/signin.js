import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function SignIn(props) {
  const [value, setValue] = useState({ prm_akun: "", pass_user: "" });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`https://my-mysql-api.herokuapp.com/user/login`, value, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(result => alert(result.data.message))
      .catch(error => {
        console.log(error);
      });
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
        <Label for="prm_akun">Name / Email</Label>
        <Input
          type="text"
          name="prm_akun"
          placeholder=""
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="pass_user"
          placeholder=""
          onChange={handleChange}
        />
      </FormGroup>
      <Button className="btn-block" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
