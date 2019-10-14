import React, { PureComponent } from 'react'

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader
} from "reactstrap";
class Testhero1 extends PureComponent {
    render() {
        return (
            <div>
                {/* <Card>
                    <CardHeader>
                        <div className="hero">        
                            <hgroup>
                                <h1 className="testcolor">We are amazing</h1>        
                                <h3 className="testcolor">Get start your next awesome blood donors event</h3>
                            </hgroup>
                            <button className="btn btn-hero2 btn-lg bgblooddonor">Create Event</button>
                        </div>
                    </CardHeader>
                </Card>
                <Container>
                    <Row>
                        <Col>
                            <div className="hero">        
                                <hgroup>
                                    <h1 className="testcolor">We are amazing</h1>        
                                    <h3 className="testcolor">Get start your next awesome blood donors event</h3>
                                </hgroup>
                                <button className="btn btn-hero2 btn-lg bgblooddonor">Create Event</button>
                            </div>
                        </Col>
                    </Row>
                </Container> */}
                <Card>
                    <CardHeader className="bgblooddonor">
                        <div className="hero">        
                            <hgroup>
                                <h1>We are amazing</h1>        
                                <h3>Get start your next awesome blood donors event</h3>
                            </hgroup>
                            <button className="btn btn-hero1 btn-lg">Create Event</button>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        )
    }
}
export default Testhero1;