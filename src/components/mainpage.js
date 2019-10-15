import React, { PureComponent } from 'react'
import Homepage from "./main";
import EventsCard from "./EventsCard";
import Testhero1 from "./testhero1";

class Mainpage extends PureComponent {
    render() {
        return (
            <div>
                <Homepage />
                <Testhero1 />
                <EventsCard />
            </div>
        )
    }
}
export default Mainpage;