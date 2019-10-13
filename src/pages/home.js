import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";
import { Button,Row, Col, } from 'reactstrap';
class Homepage extends Component {
  render() {
    return (
      <div>
      <Carousel className="vh80">
        <Carousel.Item style={{padding:"0px"}}>
          <Row className="vh80 itemaligncenter justcontentleft padleft5em" style={{backgroundImage:"url(http://transdeal.co.id/multer-image-upload/2.jpg)",backgroundSize:"cover"}}>
            <Col className="opacity05" xs="6">
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="vh80 itemaligncenter justcontentright padright5em" style={{backgroundImage:"url(http://transdeal.co.id/multer-image-upload/3.jpg)",backgroundSize:"cover"}}>
            <Col className="opacity05" xs="6">
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Col>
          </Row>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
        <header className="App-header">
          <img src={image1} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {this.props.testredux}
          </a>
        </header>
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
