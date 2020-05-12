import React from "react";
import Row from "../Row";
import Col from "../Col";
import Header from '../Header';
import Project from "../Project";



function Portfolio() {
    return (
        <div>

            <Header value="Portfolio" />
            <Row className="row mt-5">
                <Col size="md-5" margin="ml-auto mr-auto">
                    <Project href="http://quiet-thicket-75299.herokuapp.com/" src='../../images/in2uned.jpeg' alt="in2uned" title="In2uned Music Reviews" />
                </Col>
                <Col size="md-5" margin="ml-auto mr-auto">
                    <Project href="https://coreysalva.github.io/tune-me-in/" src='../../images/tuneMeIn.jpeg' alt="Tune Me In" title="Tune Me In" />
                </Col>
            </Row>
            <Row className="row mt-5">
                <Col size="md-5" margin="ml-auto mr-auto">
                    <Project href="https://kapslock07.github.io/WeatherDashboard/" src='../../images/weatherDash.jpeg' alt="Weather Dashboard" title="Weather Dashboard" />
                </Col>
                <Col size="md-5" margin="ml-auto mr-auto">
                    <Project href="https://kapslock07.github.io/WorkDayScheduler/" src='../../images/dayPlanner.jpeg' alt="Day Planner" title="Day Planner" />
                </Col>
            </Row>
            <Row className="row mt-5">
                <Col size="md-5" margin="ml-auto mr-auto">
                    <Project href="http://kapslock07.github.io/PasswordGenerator/" src='../../images/Password-640x480.png' alt="Password Generator" title="Password Generator" />
                </Col>
                <Col size="md-5" margin="ml-auto mr-auto">
                    <Project href="https://boiling-basin-56291.herokuapp.com/" src='../../images/fitnessTracker.jpg' alt="Fitness Tracker" title="Fitness Tracker" />
                </Col>
            </Row>

        </div >
    );
}

export default Portfolio;
