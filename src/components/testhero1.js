import React, { PureComponent } from 'react'

import {
    Card,
    CardHeader
} from "reactstrap";
import {
  Link
} from "react-router-dom";
class Testhero1 extends PureComponent {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="bgblooddonor">
                        <div className="hero">        
                            <hgroup>
                                <h1>We are amazing</h1>        
                                <h3>Get start your next awesome blood donors event</h3>
                            </hgroup>
                            <Link to="/createevent"><button className="btn btn-hero1 btn-lg">Create Event</button></Link>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        )
    }
}
export default Testhero1;