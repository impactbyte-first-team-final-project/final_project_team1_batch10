import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';

function SignIn(props) {
  const [value, setValue] = useState({ prm_akun: "", pass_user: "", prm_akun_stat:"",prm_pass_stat:""});

  function handleSubmit(event) {
    event.preventDefault();
    const sendlogin = {
      prm_akun: value.prm_akun,
      pass_user: value.pass_user
    }
    axios
      .post(`https://my-mysql-api.herokuapp.com/user/login`, sendlogin, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(result => {
        console.log(result);
        if(result.data.message="Akun tidak ditemukan"){
          setValue({
            ...value,
            prm_akun_stat: "invalid"
          });
        } else if(result.data.message="password is invalid"){
          setValue({
            ...value,
            prm_akun_stat: "valid",
            prm_pass_stat:"invalid"
          });
        } else {
          props.dispatch({ type: 'LOGIN' });
          console.log(props);
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
        <Label for="prm_akun">Name / Email</Label>
        <Input
          type="text"
          name="prm_akun"
          placeholder=""
          onChange={handleChange}
          invalid={value.prm_akun_stat === "invalid" ? true : false}
          valid={value.prm_akun_stat === "valid" ? true : false}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="pass_user"
          placeholder=""
          onChange={handleChange}
          invalid={value.prm_pass_stat === "invalid" ? true : false}
          valid={value.prm_pass_stat === "valid" ? true : false}
        />
      </FormGroup>
      <Button className="btn-block" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
export default connect()(SignIn);