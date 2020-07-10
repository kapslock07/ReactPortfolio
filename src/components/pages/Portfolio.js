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
                <Col xl={12}>
                    <Header value="Portfolio" />
                </Col>
            </Row>
            <MDBAnimation type="fadeInUp">
                <Row className="justify-content-center">
                    <Col xl={5} className="leftProject mt-5">
                        <Project href="https://ancient-dusk-51587.herokuapp.com/" src={Project1} alt="waypoint" title="Waypoint" tools="React/JSX/MySQL/Express/Node" role="Front-End/UI Design/Components/Search & Sort" github="https://github.com/WarriorofZarona/media-matcher" description="Waypoint is a social networking platform and instant messanger for gamers looking to connect with other people who play the same games." />
                    </Col>
                    <Col xl={5} className="mt-5">
                        <Project href="http://quiet-thicket-75299.herokuapp.com/" src={Project2} alt="in2uned" title="In2uned" tools="JS/Handlebars/MongoDB/Mongoose/Express" role="Front-End/UI Design/Layouts & Views" github="https://github.com/KantKontrol/In2uned" description="In2uned is a music review site that uses Spotify's database and music player. Users can give songs up to 5 stars as well as a detailed written review" />
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" className="delay-1s">
                <Row className="justify-content-center">
                    <Col xl={5} className="leftProject mt-5">
                        <Project href="https://coreysalva.github.io/tune-me-in/" src={Project3} alt="Tune Me In" title="Tune Me In" tools="Javascript/jQuery/Materialize/APIs" role="API Requests/Display Results" github="https://github.com/coreysalva/tune-me-in" description="Search YouTube for songs, playlists. The app will display video results with easy to copy and share links as well as artist info." />
                    </Col>
                    <Col xl={5} className="mt-5">
                        <Project href="https://kapslock07.github.io/WeatherDashboard/" src={Project4} alt="Weather Dashboard" title="Weather Dashboard" tools="Javascript" github="https://github.com/kapslock07/WeatherDashboard" />
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" className="delay-2s">
                <Row className="justify-content-center">
                    <Col xl={5} className="leftProject  mt-5">
                        <Project href="https://kapslock07.github.io/WorkDayScheduler/" src={Project5} alt="Day Planner" title="Day Planner" tools="Javascript" github="https://github.com/kapslock07/WorkDayScheduler" />
                    </Col>
                    <Col xl={5} className="mt-5">
                        <Project href="http://kapslock07.github.io/PasswordGenerator/" src={Project6} alt="Password Generator" title="Password Generator" tools="Javascript" github="https://github.com/kapslock07/WeatherDashboard" />
                    </Col>
                </Row >
            </MDBAnimation>
        </Container >
    );
}

export default Portfolio;
