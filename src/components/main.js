import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import { Container, Card, Row, CardBody, Col } from "reactstrap";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artikelData: ""
    };
  } 
  componentDidMount() {   
    axios.get(`https://my-mysql-api.herokuapp.com/artikel`)
    .then(res => {
        this.setState({ 
            artikelData:res.data.result
        })
        console.log(res.data.result);
        console.log(this.state.artikelData);
        })
    }
  render() {
    return (
      <div>
        <Carousel>
          {this.state.artikelData.length > 0 && this.state.artikelData.map((artikeldata,index) =>
          <Carousel.Item
            style={{
              height: "100vh",
              backgroundImage:
                `url(${artikeldata.img_article})`,
              backgroundSize: "cover"
            }}
          >
            <Container
              className="fullheightwidht"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Row className="fullwidht">
                <Col xs="5">
                  <Card
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: "#ffffff"
                    }}
                  >
                    <CardBody style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                      <h3>{artikeldata.title_article}</h3>
                      <p>{artikeldata.body_article}</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          )}
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testredux: state.reducer.testredux
  };
};
export default connect(mapStateToProps)(Homepage);
