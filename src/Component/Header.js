import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Row, Navbar, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Row className="mb-5">
        <Navbar className=" navbar-width">
          <Col className="col-9">
            <Navbar.Brand>pomodoroApp</Navbar.Brand>
          </Col>
          <Col className="col-3">
            <Button variant="success" className="mr-1 ">
              Report
            </Button>
            <Button variant="success" className="mr-1">
              Setting
            </Button>
            <Button variant="success" className="mr-0">
              Login
            </Button>
          </Col>
        </Navbar>
      </Row>
    );
  }
}

export default Header;
