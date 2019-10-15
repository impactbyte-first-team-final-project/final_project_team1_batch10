import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Row,
    Col
} 
from "react-bootstrap";

class Stickynavbar extends Component {
    state = {
        bgnav: "bgtransparent",
      };
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          if (window.scrollY <= 100) {
            this.setState({ 
                bgnav:"bgtransparent" 
            })
          } else {
            this.setState({ 
                bgnav:"bgblooddonor" 
            })
          }
        });
      }
    render() {
        return (
            <div>
                <Navbar className={this.state.bgnav} expand="lg" fixed="top">
                    <Row>
                        <Col xs={3}><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Col>
                        <Col xs={9}><Navbar.Brand href="#home"></Col>
                        <Col xs={3}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Navbar>
            </div>
        )
    }
}
export default Stickynavbar;