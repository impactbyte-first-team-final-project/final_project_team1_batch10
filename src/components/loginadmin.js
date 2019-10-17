import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from "reactstrap";
import { connect } from 'react-redux';

function SignInAdmin(props) {
  const [value, setValue] = useState({ id_admin: "", pass_admin: ""});

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`https://my-mysql-api.herokuapp.com/admin/login`, value, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(result => {
        if(result.data.message==="Admin tidak ditemukan"){
          alert(result.data.message);
        } else if(result.data.message==="password is invalid"){
          alert(result.data.message);
        } else {
          alert(result.data.message);
          setValue({
            id_admin: "",
            pass_admin: "",
          });
        }
      })
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
    <Card style={{marginLeft:"20em", marginRight:"20em", top:"5em"}}>
      <CardHeader>
        <h4 style={{textAlign:"center", fontWeight:"bold"}}>ADMIN LOG IN</h4>
      </CardHeader>
      <CardBody>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="prm_admin">Name / Email</Label>
        <Input
          type="text"
          name="prm_admin"
          placeholder=""
          onChange={handleChange}
    
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="pass_admin"
          placeholder=""
          onChange={handleChange}

        />
      </FormGroup>
      <Button style={{marginLeft:"32em"}} onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </CardBody>    
    </Card>
  );
}
export default SignInAdmin;