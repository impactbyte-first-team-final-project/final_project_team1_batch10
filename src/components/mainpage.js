import React, { PureComponent } from "react";
import Homepage from "./main";
import EventsCard from "./EventsCard";
import Testhero1 from "./testhero1";
// import FormDetail from "./formDetail";
//import Testkirimemail from "./testkirimemail";

class Mainpage extends PureComponent {
  render() {
    return (
      <div>
        <Homepage />
        <Testhero1 />
        <EventsCard />

        {/* <FormDetail /> */}
        {/* <Testkirimemail /> */}
      </div>
    );
  }
}
export default Mainpage;
