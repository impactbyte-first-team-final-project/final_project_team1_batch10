import React, { Component } from 'react'
import { connect } from "react-redux";

class Ceklogin extends Component {
    componentDidMount() {
        let userInfo  = sessionStorage.getItem("logininfo");
        if(userInfo === null || userInfo === undefined){
            this.props.dispatch({ type: "LOGOUT" });
        } else {
            this.props.dispatch({ type: "LOGIN" });
            let listuserInfo = JSON.parse(userInfo);
            this.props.dispatch({ type: "USER_INFO", payload: listuserInfo });
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default connect()(Ceklogin);