import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
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
    postsPerPage: 4,
    tentangevents: [],
    tentangEventsTemp: [],
    input: ""
  };
  componentDidMount = () => {
    axios
      .get(`https://my-mysql-api.herokuapp.com/events/approved`)
      .then(response => {
        this.setState({
          tentangevents: response.data.result,
          tentangEventsTemp: response.data.result
        });
      })
      .catch(error => {});
  };

  handleInput = event => {
    this.setState({
      tentangevents: this.state.tentangEventsTemp.filter(
        post => {
          console.log(post.namaevents);
          return post.namaevents === event.target.value;
        },
        () => {
          console.log(
            this.state.tentangEventsTemp.filter(post => post.namaevents),
            "HAHA"
          );
          if (event.target.value === "") {
            this.setState({
              tentangevents: this.state.tentangEventsTemp.slice(0, 4)
            });
          }
        }
      )

      // input: event.target.value,
      // event: this.state.tentangevents.filter(event =>
      //   new RegExp(event.target.value, "i").exec(event.namaevents)
      // )
    });
  };
  render() {
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.tentangevents.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    // let PeopleCards =
    return (
      <div>
        <Container fluid style={{ padding: "1em" }}>
          <div className="search-bar">
            <form>
              <input
                type="text"
                placeholder="Search for Events"
                value={this.stateinput}
                onChange={this.handleInput}
              />
            </form>
          </div>
          <Row>
            <Col xs="12">
              <Card
                style={{
                  minHeight: "500vh"
                }}
              >
                <CardBody>
                  <Row>
                    {currentPosts.map(event => {
                      return (
                        <Col xs="12" md="3" lg="3" sm="6">
                          <Card>
                            <CardImg
                              top
                              width="100%"
                              src={
                                event.eventpict
                                  ? event.eventpict
                                  : "https://via.placeholder.com/300x200"
                              }
                              alt="Card image cap"
                            />
                            <CardBody>
                              <CardTitle
                                className="testcolor"
                                style={{ fontSize: "17px" }}
                              >
                                {event.namaevents}
                              </CardTitle>
                              <CardSubtitle
                                style={{
                                  fontFamily: "Times New Roman",
                                  fontWeight: "bold"
                                }}
                              >
                                <p>
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  >
                                    {`  ${event.eventlocation}`}
                                  </i>
                                  <br />
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  >
                                    {` ${event.startdateevents}`}
                                  </i>
                                </p>
                              </CardSubtitle>
                              <CardText>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's content
                                content.
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
                    })}
                  </Row>
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
