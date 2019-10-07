import React, { Component } from 'react'
import logo from './logo.svg';
import { connect } from 'react-redux';
import { refreshPaging } from "./redux/reducers";
class Homepage extends Component {
  componentDidMount() {
    this.props.refreshPaging();
    console.log(this.props.contentlist);
  }

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
      testredux: state.testredux,
      contentlist: state.contentlist
    };
  };
export default connect(
    mapStateToProps,
    { refreshPaging }
  )(Homepage);
