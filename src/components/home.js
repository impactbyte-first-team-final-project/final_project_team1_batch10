import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";
class CarouselHome extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.item>
            <img className="d-block w-100" src={image1} alt="" />
            <Carousel.caption>
              <h3>belajarjajajja</h3>
              <p>hbhkkhbkb</p>
            </Carousel.caption>
          </Carousel.item>
          <Carousel.item>
            <img className="d-block w-100" src={image2} alt="" />
            <Carousel.caption>
              <h3>Belajar</h3>
              <p>hahahahah</p>
            </Carousel.caption>
          </Carousel.item>
          <Carousel.item>
            <img className="d-block w-100" src={image3} alt="" />
            <Carousel.caption>
              <h3>Belajar Donor dari sekarang</h3>
              <p>hahahhaha</p>
            </Carousel.caption>
          </Carousel.item>
        </Carousel>
      </div>
    );
  }
}
export default CarouselHome;
