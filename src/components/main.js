import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item style={{height:"90vh",backgroundImage:"url(https://images2.minutemediacdn.com/image/upload/c_crop,h_1686,w_3000,x_0,y_157/f_auto,q_auto,w_1100/v1554703808/shape/mentalfloss/gettyimages-926597358.jpg)",backgroundSize:"cover"}}>
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
