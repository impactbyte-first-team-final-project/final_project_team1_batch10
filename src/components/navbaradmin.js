import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Col,
  Container,
  NavLink,
  ListGroup,
  ListGroupItem,
  Row
} from "reactstrap";

import Modaladdadmin from "./modaladdadmin";
import Article from "./article";
import EventTable from "./eventTable";

const NavBarAdmin = props => {
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
                <Button color="secondary">Log Out</Button>{" "}
              </NavItem>
            </Col>
          </Nav>
        </Navbar>

        <Row>
          <Col xs="1">
            <ListGroup
              flush
              style={{ marginRight: "0px", borderRightWidth: "20px" }}
            >
              <ListGroupItem tag="a">
                <Link to="/admin/approve">Event Approval</Link>
              </ListGroupItem>

              <ListGroupItem tag="a">
                <Link to="/admin/article">Submit Article</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="11">
            <Switch>
              <Route exact path="/admin/approve">
                <EventTable />
              </Route>
              <Route path="/admin/article">
                <Article />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default NavBarAdmin;
