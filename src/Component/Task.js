import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faPlusCircle,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faSave, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Task = () => {
  return (
    <Container>
      <Row className="task-container justify-content-center">
        <Col className="col-3">
          <h6 className="text-center mt-4">Time to work!</h6>
        </Col>
      </Row>
      <Row className="justify-content-center ">
        <Col className="col-6 d-flex flex-row justify-content-between task-underline pb-2 px-0 align-items-center">
          <p className="h5 m-0">Tasks</p>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <Button variant="light">
                <FontAwesomeIcon icon={faEllipsisV} />
              </Button>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ inset: "auto" }}>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ marginRight: "10px" }}
                />
                Clear finish task
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: "10px" }}
                />
                Clear act pomodoros
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <FontAwesomeIcon
                  icon={faSave}
                  style={{ marginRight: "10px" }}
                />
                Save as template
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ marginRight: "10px" }}
                />
                Add from templates
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="justify-content-center ">
        <Col className="col-6 mt-5 px-0">
          <Button variant="secondary">
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{ marginRight: "10px" }}
            />
            Add Task
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Task;
