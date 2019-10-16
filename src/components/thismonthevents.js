import React from "react";
import Slider from "react-slick";
import { withRouter} from 'react-router-dom';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import image1 from "../assets/img/1.jpg";

class Thismonthevent extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    console.log(this.props);
    
    return (
        <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
        <div key={1}>
            <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                    </CardTitle>
                    <CardSubtitle
                    style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold"
                    }}
                    >
                    <p>
                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                    </p>
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                    </CardText>
                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                        pathname: '/eventdetail',
                        state: { idevent: 123 }
                        })}>Lihat detail event</Button>
                </CardBody>
            </Card>
        </div>
        <div key={2}>
            <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                    </CardTitle>
                    <CardSubtitle
                    style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold"
                    }}
                    >
                    <p>
                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                    </p>
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                    </CardText>
                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                        pathname: '/eventdetail',
                        state: { idevent: 456 }
                        })}>Lihat detail event</Button>
                </CardBody>
            </Card>
        </div>
        <div key={3}>
            <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                    </CardTitle>
                    <CardSubtitle
                    style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold"
                    }}
                    >
                    <p>
                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                    </p>
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                    </CardText>
                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                        pathname: '/eventdetail',
                        state: { idevent: 789 }
                        })}>Lihat detail event</Button>
                </CardBody>
            </Card>
        </div>
        <div key={4}>
            <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                    </CardTitle>
                    <CardSubtitle
                    style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold"
                    }}
                    >
                    <p>
                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                    </p>
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                    </CardText>
                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                        pathname: '/eventdetail',
                        state: { idevent: 111 }
                        })}>Lihat detail event</Button>
                </CardBody>
            </Card>
        </div>
        <div key={5}>
            <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                    </CardTitle>
                    <CardSubtitle
                    style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold"
                    }}
                    >
                    <p>
                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                    </p>
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                    </CardText>
                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                        pathname: '/eventdetail',
                        state: { idevent: 222 }
                        })}>Lihat detail event</Button>
                </CardBody>
            </Card>
        </div>
        <div key={6}>
            <Card className="mrgtopbtm1em">
                <CardImg top width="100%" src={image1} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="testcolor" style={{ fontSize: "25px" }}>
                    Name Events
                    </CardTitle>
                    <CardSubtitle
                    style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold"
                    }}
                    >
                    <p>
                    <i class="fa fa-map-marker" aria-hidden="true"> Event Location</i><br />
                    <i class="fa fa-calendar" aria-hidden="true"> Wed, Nov 20, 2019, 7:00 PM</i>
                    </p>
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content content.
                    </CardText>
                    <Button block="true" className="bgblooddonor" onClick={() => this.props.history.push({
                        pathname: '/eventdetail',
                        state: { idevent: 333 }
                        })}>Lihat detail event</Button>
                </CardBody>
            </Card>
        </div>
        </Slider>
            <i className="fa fa-arrow-circle-left fa-2x PointerKursor slickArrowLeft" aria-hidden="true" onClick={this.previous}></i>
            <i className="fa fa-arrow-circle-right fa-2x PointerKursor slickArrowRight" aria-hidden="true" onClick={this.next}></i>
        </div>
    );
  }
}

export default withRouter(Thismonthevent);