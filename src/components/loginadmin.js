import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from "reactstrap";
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";


function SignInAdmin(props) {
  const [value, setValue] = useState({ idadmin: "", passadmin: ""});

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
            idadmin: "",
            passadmin: "",
          });
          props.history.push("/adminpage")
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
        <Label for="idadmin">Name / Email</Label>
        <Input
          type="text"
          name="idadmin"
          placeholder=""
          onChange={handleChange}
    
        />
      </FormGroup>
      <FormGroup>
        <Label for="passadmin">Password</Label>
        <Input
          type="password"
          name="passadmin"
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
export default withRouter(SignInAdmin);