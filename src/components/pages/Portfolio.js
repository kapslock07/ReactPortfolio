import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import { MDBAnimation } from "mdbreact";
import { Slide } from 'react-awesome-reveal';
import Project from "../Project";
import Project1 from "../../assets/images/waypoint.jpg"
import Project2 from "../../assets/images/in2uned.jpeg"
import Project3 from "../../assets/images/tuneMeIn.jpeg"
import Project4 from "../../assets/images/weatherDash.jpeg"
import Project5 from "../../assets/images/dayPlanner.jpeg"
import Project6 from "../../assets/images/password.jpg"




function Portfolio() {

    return (
        <Container fluid className="portfolioBody">

            <Row className="headerBox">
                <Col xl={12}>
                    <Header value="Portfolio" />
                </Col>
            </Row>
            {/* <MDBAnimation type="fadeInUp"> */}
            <Slide direction="top" cascade>
                <Row className="justify-content-center">
                    <Col xl={5} className="leftProject mt-5">
                        <Project href="https://ancient-dusk-51587.herokuapp.com/" src={Project1} alt="waypoint" title="Waypoint" tools="React/JSX/MySQL/Express/Node/MDBoostrap" role="Front-End/UI Design/Components/Search & Sort" github="https://github.com/WarriorofZarona/media-matcher" description="Waypoint is a social networking platform and instant messenger for gamers looking to connect with other people who play the same games." />
                    </Col>
                    <Col xl={5} className="mt-5">
                        <Project href="http://quiet-thicket-75299.herokuapp.com/" src={Project2} alt="in2uned" title="In2uned" tools="Handlebars/MySQL/Express" tools2="Passport/jQuery/Bootstrap" role="Front-End/UI Design/Layouts & Views" github="https://github.com/KantKontrol/In2uned" description="This application connects the user to the Spotify API via their account, then allows users to review songs and share them on their profile." />
                    </Col>
                </Row>
                {/* </MDBAnimation> */}
                {/* <MDBAnimation type="fadeInUp" className="delay-1s"> */}
                <Row className="justify-content-center hideme">
                    <Col xl={5} className="leftProject mt-5">
                        <Project href="https://coreysalva.github.io/tune-me-in/" src={Project3} alt="Tune Me In" title="Tune Me In" tools="Javascript/jQuery/Materialize/AJAX" role="API Requests/Displaying Results" github="https://github.com/coreysalva/tune-me-in" description="Search YouTube for songs, playlists. The app will display video results with easy to copy and share links as well as artist info." />
                    </Col>
                    <Col xl={5} className="mt-5">
                        <Project href="https://kapslock07.github.io/WeatherDashboard/" src={Project4} alt="Weather Dashboard" title="Weather Dashboard" tools="Javascript/jQuery/AJAX/localStorage" role="Sole Developer" github="https://github.com/kapslock07/WeatherDashboard" description="Weather application that allows users view weather data for any city and stores search history locally. Previous searches can be clicked on for updated data on those cities." />
                    </Col>
                </Row>
                {/* </MDBAnimation> */}
                {/* <MDBAnimation type="fadeInUp" className="delay-2s"> */}
                <Row className="justify-content-center hideme">
                    <Col xl={5} className="leftProject  mt-5">
                        <Project href="https://kapslock07.github.io/WorkDayScheduler/" src={Project5} alt="Day Planner" title="Day Planner" tools="Javascript/jQuery/Moment.js/Bootstrap" role="Sole Developer" github="https://github.com/kapslock07/WorkDayScheduler" description="A calendar application featuring dynamically updated HTML and CSS that allows the user to save events on local storage." />
                    </Col>
                    <Col xl={5} className="mt-5">
                        <Project href="http://kapslock07.github.io/PasswordGenerator/" src={Project6} alt="Password Generator" title="Password Generator" tools="HTML/CSS/Javascript" role="Sole Developer" github="https://github.com/kapslock07/WeatherDashboard" description="An application that generates a random password based on user-selected criteria from prompts." />
                    </Col>
                </Row >
                {/* </MDBAnimation> */}
            </Slide>
        </Container >

    );
}

export default Portfolio;
