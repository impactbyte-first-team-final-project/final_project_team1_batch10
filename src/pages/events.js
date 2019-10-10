import React, { Component } from "react";
import "../App";
import axios from "axios";

import { Row, Col } from "reactstrap";
//import NewEvents from "./component/NewEvents";

class EventPage extends Component {
  state = {
    events: [],
    showModal: false,
    editMode: false,
    data: {
      namaevents: "",
      startdate: "",
      enddate: "",
      starttime: "",
      endtime: "",
      eventlocation: "",
      eoname: "",
      pic: "",
      picphone: "",
      eooffice: ""
    }
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
      editMode: false,
      data: {
        namaevents: "",
        startdate: "",
        enddate: "",
        starttime: "",
        endtime: "",
        eventlocation: "",
        eoname: "",
        pic: "",
        picphone: "",
        eooffice: ""
      }
    });
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events`)
      .then(response => {
        console.log(response);

        this.setState({
          events: response.data.result
        });
      })
      .catch(error => {});
  };
  handleButton() {
    console.log("Searching...");
  }

  handleInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleNewEvents = newEvents => {
    this.setState({
      events: [...this.state.events, newEvents]
    });
  };

  handleNewButton = () => {
    this.setState({
      ui: {
        formVisibilty: !this.state.ui.formVisibilty
      }
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Search for Events"
              onChange={this.handleInput}
            />
            <button onClick={this.handleButton} type="button">
              Search
            </button>
          </form>
        </div>
        <div className="events">
          {this.state.events.map((event, i) => (
            <Row key={i}>
              <Col xs="4">
                <h2>{event.namaevents}</h2>
              </Col>
              <Col xs="4">
                <h2>{event.namaevents}</h2>
              </Col>
              <Col xs="4">
                <h2>{event.namaevents}</h2>
              </Col>
              <Col xs="4">
                <h2>{event.namaevents}</h2>
              </Col>
              <Col xs="4">
                <h2>{event.namaevents}</h2>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    );
  }
}

export default EventPage;
