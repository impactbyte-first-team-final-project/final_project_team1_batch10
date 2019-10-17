import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';

function SignInAdmin(props) {
  const [value, setValue] = useState({ prm_admin: "", pass_admin: "", prm_admin_stat:"",prm_pass_admin:""});

  function handleSubmit(event) {
    event.preventDefault();
    const sendlogin = {
      prm_admin: value.prm_admin,
      pass_admin: value.pass_admin
    }
    props.dispatch({ type: 'LOADINGTOGGLE' });
    axios
      .post(`https://my-mysql-api.herokuapp.com/user/login`, sendlogin, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(result => {
        if(result.data.message==="Admin tidak ditemukan"){
          setValue({
            ...value,
            prm_admin_stat: "invalid"
          });
          props.dispatch({ type: 'LOADINGTOGGLE' });
          alert(result.data.message);
        } else if(result.data.message==="password is invalid"){
          setValue({
            ...value,
            prm_admin_stat: "valid",
            prm_pass_admin:"invalid"
          });
          props.dispatch({ type: 'LOADINGTOGGLE' });
          alert(result.data.message);
        } else {
          console.log("masukadmin");
          
          alert(result.data.message);
          props.dispatch({ type: 'LOADINGTOGGLE' });
          props.dispatch({ type: 'MODAL_LOGIN' });
          props.dispatch({ type: 'LOGIN' });
          setValue({
            prm_admin: "",
            pass_admin: "",
            prm_admin_stat: "",
            prm_pass_admin:""
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(props);
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
        <Label for="prm_admin">Name / Email</Label>
        <Input
          type="text"
          name="prm_admin"
          placeholder=""
          onChange={handleChange}
          invalid={value.prm_admin_stat === "invalid" ? true : false}
          valid={value.prm_admin_stat === "valid" ? true : false}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="pass_admin"
          placeholder=""
          onChange={handleChange}
          invalid={value.prm_pass_admin === "invalid" ? true : false}
          valid={value.prm_pass_admin === "valid" ? true : false}
        />
      </FormGroup>
      <Button className="btn-block" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
export default connect()(SignInAdmin);