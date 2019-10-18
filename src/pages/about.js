import React from "react";
import "./about.css";
import { Container, Carousel, Row, Col } from "reactstrap";
import image from "../assets/img/blood.jpg";

export default function About() {
  return (
    <Container>
      <div className="content" style={{ margin: 0 }}>
        <Row>
          <Col xs="8">
            <img width="75%" src={image} alt="" />
          </Col>
          <Col xs="4">
            <h4>Kisah Kami</h4>
            <h1>Perjalanan Blood Donors Bersama Pendonor</h1>
            <p>
              Dalam satu dekade terakhir, kami menemukan berbagai tantangan di
              sepanjang perjalanan. Untungnya, kami membina hubungan baik dengan
              para pasien dan pendonor sehingga kami menjembatani untuk
              melakukan kegiatan atau event yang pastinya setiap event itu ada
              donor darah.
            </p>
          </Col>
        </Row>
        <section id="mediacover">
          <div className="sechead">
            <h1>Media Recognition</h1>
          </div>
          <div className="inner">
            <div className="mediacol">
              <img src={image} alt="" />
            </div>
            <div className="mediacol">
              <img src={image} alt="" />
            </div>
            <div className="mediacol">
              <img src={image} alt="" />
            </div>
            <div className="mediacol">
              <img src={image} alt="" />
            </div>
            <div className="mediacol">
              <img src={image} alt="" />
            </div>
          </div>
        </section>
        <section id="testimonials">
          <div className="sechead">
            <h1>Testimonials</h1>
            <p>
              Some recognition from our loyal customer. You can see how much
              they love us.
            </p>
          </div>
          <div id="slideshow">
            <div className="slide-wrapper">
              <div className="slide">
                <img src={image} alt="" />
                <blockquote>
                  I now feel confident enough to find high quality tenants and
                  manage my own properties. Impact makes all of this so much
                  easier!
                </blockquote>
                <h3>Anbya</h3>
                <p>Jakarta Selatan, Pondok Indah Square</p>
              </div>
              <div className="slide">
                <img src={image} alt="" />
                <blockquote>
                  I now feel confident enough to find high quality tenants and
                  manage my own properties. Impact makes all of this so much
                  easier!
                </blockquote>
                <h3>Anbya</h3>
                <p>Jakarta Selatan, Pondok Indah Square</p>
              </div>
              <div className="slide">
                <img src={image} alt="" />
                <blockquote>
                  I now feel confident enough to find high quality tenants and
                  manage my own properties. Impact makes all of this so much
                  easier!
                </blockquote>
                <h3>Anbya</h3>
                <p>Jakarta Selatan, Pondok Indah Square</p>
              </div>
            </div>
          </div>
        </section>
        <section id="coveragearea">
          <h1>Our Team</h1>

          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <img src={image} className="profile-pic" />
              <h3>Anbya</h3>
              <p>
                <h3>Fullstack Developer</h3>
              </p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <img src={image} className="profile-pic" />
              <h3>Arsya</h3>
              <p>
                <h3>Fullstack Developer</h3>
              </p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <img src={image} className="profile-pic" />
              <h3>Galang</h3>
              <p>
                <h3>Frontend</h3>
              </p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <img src={image} className="profile-pic" />
              <h3>Guntur</h3>
              <p>
                <h3>Frontend </h3>
              </p>
            </Col>
          </Row>
        </section>
      </div>
    </Container>
  );
}
