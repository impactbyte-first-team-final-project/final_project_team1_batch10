import React, { Component } from 'react'
// import axios from "axios";
import { connect } from "react-redux";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

class Testkirimemail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ""
      };
    } 
    handleSubmit = event => {
      event.preventDefault();
      const sendEmail = {
        email: this.state.email
      };
      this.props.dispatch({ type: "LOADINGTOGGLE" });
        fetch(`http://transdeal.co.id/test_kirim_email.php?email="blooddonorsnagadunia@gmail.com"&idevent="EVN20190000006"`);
    //   axios
    //     .post(`http://transdeal.co.id/test_kirim_email.php`, sendEmail, {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*"
    //       },
    //       crossDomain: true
    //     });
        console.log(this.state.email);
        alert("Berhasil mengirim email");
        this.props.dispatch({ type: "LOADINGTOGGLE" });
        this.setState({
            email: ""
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
                <Container fluid>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs="8">
                            <FormGroup>
                                <Input
                                type="text"
                                name="email"
                                placeholder="isi email"
                                onChange={this.handleChange}
                                invalid={this.state.prm_akun_stat === "invalid" ? true : false}
                                valid={this.state.prm_akun_stat === "valid" ? true : false}
                                required
                                />
                            </FormGroup>
                        </Col>
                        <Col xs="4">
                            <Button className="btn-block bgblooddonor" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
                </Container>
                
            </div>
        )
    }
}

export default connect()(Testkirimemail);