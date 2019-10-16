import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class HelloWorld extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  } 

  deleteThisGoal() {
    const getAlert = () => (
        <SweetAlert
        confirmBtnText="OK"
        confirmBtnBsStyle="danger"
        danger 
        title="Here's a message!" 
        onConfirm={() => this.hideAlert()}>
        </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
          <a 
            onClick={() => this.deleteThisGoal()}
            className='btn btn-danger'
          >
            <i className="fa fa-trash" aria-hidden="true"></i> Delete Goal
        </a>
        {this.state.alert}
      </div>
    );
  }
}