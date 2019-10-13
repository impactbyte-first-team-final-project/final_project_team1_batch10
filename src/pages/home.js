import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button } from "reactstrap";

class Homepage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <Jumbotron>
            <h1 className="display-3">Hello, Donors!</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>You can Login to particate events and donors</p>
            <p className="lead">
              <Button color="primary">Login</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testredux: state.testredux
  };
};
export default connect(mapStateToProps)(Homepage);
