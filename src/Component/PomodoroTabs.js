import { Tab } from "bootstrap";
import React from "react";
import { Row, Col, Tabs, Button, Container } from "react-bootstrap";

function Pomodoro() {
  return (
    <>
      <Container className="w-50 justify-content-center pomodoro-container">
        <Row className="justify-content-center">
          <Col className="col-width">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Pomodoro">
                <div>
                  <h1 className="PodomorTimer">25:00</h1>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Short Break">
                <div>
                  <h1 className="PodomorTimer">05:00</h1>
                </div>
              </Tab>
              <Tab eventKey="longbreak" title="Lonk Break">
                <div>
                  <h1 className="PodomorTimer ">15:00</h1>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-btn">
            <Button className=" btn-custom-padding">START</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pomodoro;
