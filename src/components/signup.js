import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios"; 
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


function SignUp(props) {
    
  const [value, setValue] = useState({
    namauser: "",
    emailuser: "",
    gender: "",
    bloodtype: "",
    rhfactor: "",
    passuser: "",
    repassword:""
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.dispatch({ type: "LOADINGTOGGLE" });
    if (
      value.namauser === "" ||
      value.emailuser === "" ||
      value.gender === "" ||
      value.bloodtype === "" ||
      value.rhfactor === "" ||
      value.passuser === "" ||
      value.repassword === ""
    ) {
      alert("Please complete fill the form");
      props.dispatch({ type: "LOADINGTOGGLE" });
    } else if (value.passuser !== value.repassword) {
      alert("Password didn/t match, please Re-type your password!");
      props.dispatch({ type: "LOADINGTOGGLE" });
    } else {
      const sendSignup = {
        namauser: value.namauser,
        emailuser: value.emailuser,
        gender: value.gender,
        bloodtype: value.bloodtype,
        rhfactor: value.rhfactor,
        passuser: value.passuser
      };
      axios
      .post(`https://my-mysql-api.herokuapp.com/user`, sendSignup, {
        headers: {
          "Access-Control-Allow-Origin": '*'
        }
      })
      .then(result => {
        alert(`Akun anda berhasil terdaftar, silahkan lakukan sign in!`)
        props.toggle("1");
        props.dispatch({ type: "LOADINGTOGGLE" });
     

      })
      .catch(error => {
        // console.log(error);
        props.dispatch({ type: "LOADINGTOGGLE" });
      });
    }
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
      bloodtype: event.target.value
    });
  }

  function handleRhfactor(event) {
    setValue({
      ...value,
      rhfactor: event.target.value
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="namauser">Full Name</Label>
        <Input
          type="text"
          name="namauser"
          id="namauser"
          placeholder="e.g Nikita Khrushchev"
          onChange={handleChange}
          defaultValue = {setValue.namauser}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="emailuser"
          id="emailuser"
          placeholder="e.g nikita.krushchev@xxxxx.com"
          onChange={handleChange}
          defaultValue = {setValue.emailuser}
          required
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
          <Label for="bloodtype">Blood Type</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="A"
                value="A"
                checked={value.bloodtype === "A"}
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
                checked={value.bloodtype === "B"}
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
                checked={value.bloodtype === "O"}
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
                checked={value.bloodtype === "AB"}
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
                checked={value.bloodtype === "notSure"}
                onChange={handleBlood}
              />
              Not Sure
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
          <br />
          <Label for="rhfactor">Rh Factor</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="+"
                value="+"
                checked={value.rhfactor === "+"}
                onChange={handleRhfactor}
              />
              +
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="-"
                value="-"
                checked={value.rhfactor === "-"}
                onChange={handleRhfactor}
              />
              -
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="notSure"
                value="notSure"
                checked={value.rhfactor === "notSure"}
                onChange={handleRhfactor}
              />
              Not Sure
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="passuser"
            id="passuser"
            placeholder=""
            onChange={handleChange}
            defaultValue = {setValue.passuser}
            required
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
            required
          />
        </FormGroup>
      </FormGroup>
      <Button className="btn-block bgblooddonor" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default connect()(SignUp);