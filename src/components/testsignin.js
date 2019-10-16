import React, { Component } from 'react'
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prm_akun: "",
      pass_user: "",
      prm_akun_stat: "",
      prm_pass_stat: ""
    };
  } 
  handleSubmit = event => {
    event.preventDefault();
    const sendlogin = {
      prm_akun: this.state.prm_akun,
      pass_user: this.state.pass_user
    };
    this.props.dispatch({ type: "LOADINGTOGGLE" });
    axios
      .post(`https://my-mysql-api.herokuapp.com/user/login`, sendlogin, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(result => {
        if (result.data.message === "Akun tidak ditemukan") {
          this.setState({
            ...this.state,
            prm_akun_stat: "invalid"
          });
          this.props.dispatch({ type: "LOADINGTOGGLE" });
          alert(result.data.message);
        } else if (result.data.message === "password is invalid") {
          this.setState({
            ...this.state,
            prm_akun_stat: "valid",
            prm_pass_stat: "invalid"
          });
          this.props.dispatch({ type: "LOADINGTOGGLE" });
          alert(result.data.message);
        } else {
          alert(result.data.message);
          this.props.dispatch({ type: "LOADINGTOGGLE" });
          this.props.dispatch({ type: "MODAL_LOGIN" });
          this.props.dispatch({ type: "LOGIN" });
          this.setState({
            prm_akun: "",
            pass_user: "",
            prm_akun_stat: "",
            prm_pass_stat: ""
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(this.props);
      });
  }

  handleChange = event =>  {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="prm_akun">Name / Email</Label>
            <Input
              type="text"
              name="prm_akun"
              placeholder=""
              onChange={this.handleChange}
              invalid={this.state.prm_akun_stat === "invalid" ? true : false}
              valid={this.state.prm_akun_stat === "valid" ? true : false}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="pass_user"
              placeholder=""
              onChange={this.handleChange}
              invalid={this.state.prm_pass_stat === "invalid" ? true : false}
              valid={this.state.prm_pass_stat === "valid" ? true : false}
              required
            />
          </FormGroup>
          <Button className="btn-block bgblooddonor">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect()(SignIn);
