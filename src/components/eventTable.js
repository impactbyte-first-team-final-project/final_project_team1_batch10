import React from "react";
import { Table } from "reactstrap";

const EventTable = props => {
  const data = {
    eventName: "test",
    eventAddress: "test",
    eventDateStart: "test",
    eventDateFinish: "test",
    eventTimeStart: "test",
    eventTimeFinish: "test",
    eoName: "test",
    eoPic: "joko",
    phonePic: "123",
    emailPic: "qqq@www.com",
    eoAddress: "test"
  };
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Event Address</th>
          <th>Event Date Start</th>
          <th>Event Date Finish</th>
          <th>Event Time Start</th>
          <th>Event Time Finish</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.eventName}</td>
          <td>{data.eventAddress}</td>
          <td>{data.eventDateStart}</td>
          <td>{data.eventDateFinish}</td>
          <td>{data.eventTimeStart}</td>
          <td>{data.eventTimeFinish}</td>
        </tr>
      </tbody>
      <br />
      <thead>
        <tr>
          <th>EO PIC</th>
          <th>PIC Phone</th>
          <th>PIC Email</th>
          <th>EO Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.eoPic}</td>
          <td>{data.phonePic}</td>
          <td>{data.emailPic}</td>
          <td>{data.eoAddress}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EventTable;
