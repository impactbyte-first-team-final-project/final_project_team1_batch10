import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
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
import Pagination from "../components/Pagination";

class Eventlist extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 3,
    tentangevents: [],
    input: ""
  };
  componentDidMount = () => {
    axios
      .get(`https://my-mysql-api.herokuapp.com/events/approved`)
      .then(response => {
        this.setState({
          tentangevents: response.data.result
        });
      })
      .catch(error => {});
  };
  handleInput = event => {
    this.setState({
      input: event.target.value
    });
  };
  render() {
    //search
    let filtered=this.state.tentangevents.filter(tentangevents)=>{
      return event.tentangevents.toLowerCase().indexOf(this.state.search.toLowerCase())!=1
    }
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.tentangevents.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    console.log(this.state.currentPage);

    let PeopleCards = currentPosts.map(event => {
      console.log(event, "hjhkjh");

      return (
        <Col xs="4">
          <Card className="mrgtopbtm1em">
            <CardImg top width="100%" src={image1} alt="Card image cap" />
            <CardBody>
              <CardTitle className="testcolor" style={{ fontSize: "17px" }}>
                {event.namaevents}
              </CardTitle>
              <CardSubtitle
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold"
                }}
              >
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true">
                    {event.eventlocation}
                  </i>
                  <br />
                  <i className="fa fa-calendar" aria-hidden="true">
                    {event.startdateevents}
                  </i>
                </p>
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content content.
              </CardText>
              <Button
                block
                className="bgblooddonor"
                onClick={() =>
                  this.props.history.push({
                    pathname: `/eventdetail/${event.idevents}`,
                    state: { idevent: 333 }
                  })
                }
              >
                Lihat detail event
              </Button>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <Container fluid style={{ padding: "1em" }}>
          <div className="search-bar">
            <form>
              <input
                type="text"
                placeholder="Search for Podcast"
                value={this.state.input}
                onChange={this.updateSearch.bind(this)}
              />
              <button onClick={this.handleButton} type="button">
                Search
              </button>
            </form>
          </div>
          <Row>
            <Col xs="4">
              <Card>
                <CardHeader>
                  <Row>
                    <Col xs="12">
                      <h3>
                        <i className="fa fa-filter" aria-hidden="true"></i>
                        Filter event
                      </h3>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="8">
              <Card>
                <CardBody>
                  <Row>{PeopleCards}</Row>
                  <Pagination
                    totalPosts={this.state.tentangevents.length}
                    postsPerPage={this.state.postsPerPage}
                    paginate={paginate}
                    currentPage={this.state.currentPage}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default withRouter(Eventlist);
