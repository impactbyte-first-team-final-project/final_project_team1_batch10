import React from "react";
import { connect } from 'react-redux';
import 
{ Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    // ModalFooter 
} from "reactstrap";
import TabsSign from "./tabs_sign";

class ModalSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalLogin}
        >
          <ModalHeader toggle={() => {this.props.dispatch({ type: 'MODAL_LOGIN' })}}></ModalHeader>
          <ModalBody>
            <TabsSign />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalLogin: state.signInReducer.modalLogin
  };
};

export default connect(
  mapStateToProps
)(ModalSign);
