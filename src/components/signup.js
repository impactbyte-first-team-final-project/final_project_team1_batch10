import React, { useState } from "react";
import axios from "axios"; 
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function SignUp(props) {
    
  const [value, setValue] = useState({
    namauser: "",
    email: "",
    gender: "",
    bloodtype: "",
    passuser: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
  
    if (
      value.namauser === "" ||
      value.email === "" ||
      value.gender === "" ||
      value.bloodtype === "" ||
      value.passuser === "" ||
      value.repassword === ""
    ) {
      alert("Please complete fill the form");
    } else if (value.password !== value.repassword) {
      alert("Password didn/t match, please Re-type your password!");
    } else {
      axios
      .post(`https://my-mysql-api.herokuapp.com/user`, value, {
        headers: {
          "Access-Control-Allow-Origin": '*'
        }
      })
      .then(result => {
        console.log(result);
      })
      .then(() => {props.history.push("/")})
      .catch(error => {
        console.log(error);
      });
    }
    console.log(value)
  }

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }

  function handleGender(event) {
    setValue({
      ...value,
      gender: event.target.value
    });
  }

  function handleBlood(event) {
    setValue({
      ...value,
      bloodType: event.target.value
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="fullName">Full Name</Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="e.g Nikita Khrushchev"
          onChange={handleChange}
          defaultValue = {setValue.fullName}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="e.g nikita.krushchev@xxxxx.com"
          onChange={handleChange}
          defaultValue = {setValue.email}
        />
      </FormGroup>
      <FormGroup tag="fieldset">
        <Label for="gender">Gender</Label>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="Male"
              value="Male"
              checked={value.gender === "Male"}
              onChange={handleGender}
            />
            Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="Female"
              value="Female"
              checked={value.gender === "Female"}
              onChange={handleGender}
            />{" "}
            Female
          </Label>
        </FormGroup>
        <FormGroup tag="fieldset">
          <br />
          <Label for="bloodType">Blood Type</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="A"
                value="A"
                checked={value.bloodType === "A"}
                onChange={handleBlood}
              />
              A
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="B"
                value="B"
                checked={value.bloodType === "B"}
                onChange={handleBlood}
              />
              B
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="O"
                value="O"
                checked={value.bloodType === "O"}
                onChange={handleBlood}
              />
              O
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="AB"
                value="AB"
                checked={value.bloodType === "AB"}
                onChange={handleBlood}
              />
              AB
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="notSure"
                value="notSure"
                checked={value.bloodType === "notSure"}
                onChange={handleBlood}
              />
              Not Sure
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder=""
            onChange={handleChange}
            defaultValue = {setValue.password}
          />
        </FormGroup>
        <FormGroup>
          <Label for="repassword">Retype Password</Label>
          <Input
            type="password"
            name="repassword"
            id="repassword"
            placeholder=""
            onChange={handleChange}
            defaultValue = {setValue.repassword}
          />
        </FormGroup>
      </FormGroup>
      <Button className="btn-block" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
