import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";
import ModalSign from "./modal_sign" 
class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item style={{height:"90vh",backgroundImage:"url(http://transdeal.co.id/multer-image-upload/1.jpg)",backgroundSize:"cover"}}>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"90vh",backgroundImage:"url(http://transdeal.co.id/multer-image-upload/2.jpg)",backgroundSize:"cover"}}>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"90vh",backgroundImage:"url(http://transdeal.co.id/multer-image-upload/3.jpg)",backgroundSize:"cover"}}>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
