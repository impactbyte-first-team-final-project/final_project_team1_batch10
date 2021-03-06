import React from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    if (this.props.islogin === true) {
      console.log(this.props.userinfo);
      
      return (
        <div>
          <Navbar className="bgblooddonor" color="light" light expand="md">
            <NavbarBrand href="/" style={{ color: "#fff",width:"7%" }}>
                  <img
                    className="fullwidht"
                    src={"https://transdeal.co.id/multer-image-upload/blooddonors_square_white.png"}
                    alt="fit"
                  />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{ color: "#fff" }}>
                    {this.props.userinfo.nama_user}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      onClick={() => {
                        this.props.dispatch({ type: "LOGOUT" });
                        sessionStorage.removeItem("logininfo");
                      }}
                      style={{ color: "#EB3349" }}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar className="bgblooddonor" color="light" light expand="md">
            <NavbarBrand href="/" style={{ color: "#fff",width:"7%"  }}>
                  <img
                    className="fullwidht"
                    src={"https://transdeal.co.id/multer-image-upload/blooddonors_square_white.png"}
                    alt="fit"
                  />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    style={{ color: "#fff" }}
                    className="PointerKursor"
                    onClick={() => {
                      this.props.dispatch({ type: "MODAL_LOGIN" });
                    }}
                  >
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    modalLogin: state.signInReducer.modalLogin,
    islogin: state.reducer.islogin,
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(NavHeader);
