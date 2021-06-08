import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import PomodoroTabs from "./Component/PomodoroTabs";
import Task from "./Component/Task";
function App() {
  return (
    <Container>
      <Header />
      <PomodoroTabs />
      <Task />
    </Container>
  );
}

export default App;
