import React from "react";
import axios from "axios";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import image1 from "../assets/img/tes.jpg";

class Upcomingevent extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      Thismonthevents: []
    };
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    axios
      .get(`https://my-mysql-api.herokuapp.com/events/upcoming`)
      .then(res => {
        this.setState({
          Thismonthevents: res.data.result
        });
        console.log(res.data.result);
        console.log(this.state.Thismonthevents);
      });
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    // console.log(this.props);

    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.state.Thismonthevents.length > 0 &&
            this.state.Thismonthevents.map((event, index) => (
              <div key={index}>
                <Card className="mrgtopbtm1em">
                  <CardBody style={{ padding: "0px" }}>
                    <img
                      className="fitimg"
                      src={
                        event.eventpict
                          ? event.eventpict
                          : "https://via.placeholder.com/300x200"
                      }
                    />
                  </CardBody>
                  <CardBody>
                    <CardTitle
                      className="testcolor"
                      style={{ fontSize: "25px", minHeight: "3em" }}
                    >
                      {event.namaevents}
                    </CardTitle>
                    <CardSubtitle
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                        minHeight: "5em"
                      }}
                    >
                      <p>
                        <i className="fa fa-map-marker" aria-hidden="true">
                          {" "}
                          {event.eventlocation}
                        </i>
                        <br />
                        <i className="fa fa-calendar" aria-hidden="true">
                          {" "}
                          {event.startdateevents} s/d {event.enddateevents}
                        </i>
                        <br />
                        <i className="fa fa-clock-o" aria-hidden="true">
                          {" "}
                          {event.starttimeevents} s/d {event.endtimeevents}
                        </i>
                      </p>
                    </CardSubtitle>
                    <CardText style={{ minHeight: "3em" }}>
                      {event.eventdescription}
                    </CardText>
                    <Button
                      block
                      className="bgblooddonor"
                      onClick={() =>
                        this.props.history.push({
                          pathname: `/eventdetail/${event.idevents}`,
                          state: { idevent: 123 }
                        })
                      }
                    >
                      Lihat detail event
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
        </Slider>
        <i
          className="fa fa-arrow-circle-left fa-2x PointerKursor slickArrowLeft"
          aria-hidden="true"
          onClick={this.previous}
        ></i>
        <i
          className="fa fa-arrow-circle-right fa-2x PointerKursor slickArrowRight"
          aria-hidden="true"
          onClick={this.next}
        ></i>
      </div>
    );
  }
}

export default withRouter(Upcomingevent);
