import React from "react";
// import Timestamp from "react-timestamp"
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Col,
  Row
} from "reactstrap";
import EventTable from "./eventTable";

const EventList = props => {
  const data = {
    eoName: "test"
  };

  return (
    <div>
      <Card style={{width:'192vh',marginLeft:'15px'}}>
        <CardHeader>
          <h3 style={{ fontWeight: "bold" }}>{data.eoName}</h3>
          {/* <Timestamp date={new Date().getDay()} options={{ includeDay: true, twentyFourHour: true }} /> */}
        </CardHeader>
        <CardBody>
          <EventTable />
        </CardBody>
        <CardFooter>
          <Row>
            <Col Col xs={{ size: 'auto' }}>
              <Button color="primary">Accept</Button>
              </Col>
              <Col Col xs={{ size: 'auto' }}>
              <Button color="danger">Decline</Button>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventList;
