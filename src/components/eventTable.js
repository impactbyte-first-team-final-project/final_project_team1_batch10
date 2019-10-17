import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  Card,
  Button,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form, Alert
} from "reactstrap";

class EventTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // showAlert:false
    };
    
  }

  componentDidMount() {
    axios
      .get(`https://my-mysql-api.herokuapp.com/events/unapprove`)
      .then(result => {
        this.setState({ data: result.data.result });
      })
      .catch(error => {
        console.log(error);
      });
      
  }

  handleClick(id, status) {
    console.log("masuk");

    const data = {
      idevent: id,
      aprrovestatus: status
    };
    // console.log(this.state.data.filter(el => id !== el.id ));
    
    axios
      .post(`https://my-mysql-api.herokuapp.com/events/update`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }  
      })
      .then(result => {
        console.log(result);
        this.setState({
          data:  this.state.data.filter(el => id !== el.idevents )
        })
        return result
      })
      .then(result=>{
        alert(`${id} has been ${status}`)
        // this.setState({showAlert:true
        })
      .catch(error => {
        console.log(error);
      });
     
  }

  render() {
    return (
      // <div>
      <Card style={{marginRight:"1%"}}>
        <CardHeader>
          <h4 style={{ fontWeight: "bold", textAlign:"center" }}>Pending Event List</h4>
        </CardHeader>
        <CardBody> 
          <Table bordered >
            <thead >
              <tr style={{textAlign:"center"}}>
                <th>ID</th>
                <th>Event Name</th>
                <th>Event Address</th>
                <th>Event Date Start</th>
                <th>Event Date Finish</th>
                <th>Event Time Start</th>
                <th>Event Time Finish</th>
                <th>EO PIC</th>
                <th>PIC Phone</th>
                <th>EO Address</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(result => {
                return (
                  <tr>
                    <td>{result.idevents}</td>
                    <td>{result.namaevents}</td>
                    <td>{result.startdate}</td>
                    <td>{result.enddate}</td>
                    <td>{result.starttime}</td>
                    <td>{result.endtime}</td>
                    <td>{result.eventlocation}</td>
                    <td>{result.pic}</td>
                    <td>{result.picphone}</td>
                    <td>{result.eooffice}</td>
                    <td>
                      <Row>
                        <Col xs={6}>
                          <Button
                            onClick={() =>
                              this.handleClick(result.idevents, "APPROVED")
                            }
                          >
                            Approve
                          </Button>
                        </Col>

                        <Col xs={1}>
                          <Button
                          color="danger" 
                          onClick={() =>
                            this.handleClick(result.idevents, "REJECTED")
                          }
                          >
                            Rejected</Button>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>

    /* {this.state.showAlert && <Alert color="success">
       <h4 className="alert-heading">Well done!</h4>
     </Alert>} */
     /* </div> */
    );
  }
}

export default EventTable;
