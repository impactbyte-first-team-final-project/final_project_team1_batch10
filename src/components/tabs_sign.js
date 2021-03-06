import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
//   Card,
//   Button,
//   CardTitle,
//   CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import SignIn from "./signin";
import SignUp from "./signup";



export default class TabsSign extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem style={{width:"50%"}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <span className="testcolor">Sign In</span>
            </NavLink>
          </NavItem>
          <NavItem style={{width:"50%"}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <span className="testcolor">Sign Up</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                  <br />
                <SignIn />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                  <br />
                <SignUp toggle={this.toggle}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
