import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from "reactstrap";

import Modaladdadmin from "./modaladdadmin";
import Article from "./article";
import EventTable from "./eventTable";


const NavBarAdmin = props => {

  function handleClose(event) {
    event.preventDefault(props);
    props.history.push("/admin")

    sessionStorage.removeItem("adminlogininfo");
    }

  return (
    <Router>
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/admin">Admin</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <Col xs={7}>
              <NavItem>
                <Modaladdadmin />
              </NavItem>
            </Col>

            <Col xs={6}>
              <NavItem>
                <Button color="danger" onClick={handleClose}>Log Out</Button>{" "}
              </NavItem>
            </Col>
          </Nav>
        </Navbar>

        <Row>
          <Col xs="1.5">
            <ListGroup
             
              style={{ marginRight: "0px", borderRightWidth: "10px", fontSize:"1em" }}
            >
              <ListGroupItem tag="a">
                <Link to="/admin-dashboard/approve" style={{textAlign:"center"}}>Event Approval</Link>
              </ListGroupItem>

              <ListGroupItem tag="a">
                <Link to="/admin-dashboard/article">Submit Article</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="11">
            <Switch>
              <Route exact path="/admin-dashboard/approve">
                <EventTable />
              </Route>
              <Route path="/admin-dashboard/article">
                <Article />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default withRouter(NavBarAdmin);
