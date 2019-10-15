import React, { useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form
} from "react-bootstrap";

function Navigationbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Blood Donors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/news">News</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              onClick={() => setIsAuthenticated(false)}
            >
              Login
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          {isAuthenticated && (
            <img
              src="../assets/img/1.jpg"
              alt="contoh"
              style={{ width: "20px", borderRadius: "20px" }}
            />
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
