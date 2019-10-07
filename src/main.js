import React, { Component } from 'react'
import logo from './logo.svg';
import { connect } from 'react-redux';
class Homepage extends Component {

    render(){
      return(
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React{this.props.testredux}
            </a>
          </header>
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
      testredux: state.testredux
    };
  };
export default connect(
    mapStateToProps
  )(Homepage);
