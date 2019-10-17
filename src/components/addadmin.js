import React, { useState } from "react";
import axios from "axios"; 
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


export default function AddAdmin(props) {
    
  const [value, setValue] = useState({
    namaadmin: "",
    hakakses: "",
    passadmin: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  
    if (
      value.namaadmin === "" ||
      value.hakakses === "" ||
      value.passadmin === "" 
    ) {
      alert("Please complete fill the form");
    } else {
      axios
      .post(`https://my-mysql-api.herokuapp.com/admin`, value, {
        headers: {
          "Access-Control-Allow-Origin": '*'
        }
      })
      .then(result => {
        alert(`Admin baru berhasil terdaftar, silahkan lakukan sign in!`)
      })
      .catch(error => {
        console.log(error);
      });
    }
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
        <Label for="namaadmin">Full Name</Label>
        <Input
          type="text"
          name="namaadmin"
          id="namaadmin"
          placeholder=""
          onChange={handleChange}
          defaultValue = {setValue.namaadmin}
        />
      </FormGroup>

      <FormGroup>
        <Label for="hakakses">Hak Akses</Label>
        <Input
          type="text"
          name="hakakses"
          placeholder=""
          onChange={handleChange}
          defaultValue = {setValue.hakakses}
        />
      </FormGroup>

      <FormGroup>
        <Label for="passadmin">Password</Label>
        <Input
          type="password"
          name="passadmin"
          placeholder=""
          onChange={handleChange}
          defaultValue = {setValue.passadmin}
        />
      </FormGroup>

      <Button className="btn-block bgblooddonor" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
