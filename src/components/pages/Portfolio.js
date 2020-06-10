import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import { MDBAnimation } from "mdbreact";
import Project from "../Project";
import Project1 from "../../assets/images/waypoint.jpg"
import Project2 from "../../assets/images/in2uned.jpeg"
import Project3 from "../../assets/images/tuneMeIn.jpeg"
import Project4 from "../../assets/images/weatherDash.jpeg"
import Project5 from "../../assets/images/dayPlanner.jpeg"
import Project6 from "../../assets/images/Password-640x480.png"




function Portfolio() {
    return (
        <Container fluid className="portfolioBody">
            <Row className="headerBox">
                <Col md={12}>
                    <Header value="Portfolio" />
                </Col>
            </Row>
            <MDBAnimation type="fadeInUp">
                <Row className="mt-5 justify-content-center">
                    <Col md={5} margin="ml-auto mr-auto">
                        <Project href="https://ancient-dusk-51587.herokuapp.com/" src={Project1} alt="waypoint" title="Waypoint" />
                    </Col>
                    <Col md={5} margin="ml-auto mr-auto">
                        <Project href="http://quiet-thicket-75299.herokuapp.com/" src={Project2} alt="in2uned" title="In2uned Music Reviews" />
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" className="delay-1s">
                <Row className="mt-5 justify-content-center">
                    <Col md={5} margin="ml-auto mr-auto">
                        <Project href="https://coreysalva.github.io/tune-me-in/" src={Project3} alt="Tune Me In" title="Tune Me In" />
                    </Col>
                    <Col md={5} margin="ml-auto mr-auto">
                        <Project href="https://kapslock07.github.io/WeatherDashboard/" src={Project4} alt="Weather Dashboard" title="Weather Dashboard" />
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" className="delay-2s">
                <Row className="mt-5 justify-content-center">
                    <Col md={5} margin="ml-auto mr-auto">
                        <Project href="https://kapslock07.github.io/WorkDayScheduler/" src={Project5} alt="Day Planner" title="Day Planner" />
                    </Col>
                    <Col md={5} margin="ml-auto mr-auto">
                        <Project href="http://kapslock07.github.io/PasswordGenerator/" src={Project6} alt="Password Generator" title="Password Generator" />
                    </Col>
                </Row >
            </MDBAnimation>
        </Container >
    );
}

export default Portfolio;
