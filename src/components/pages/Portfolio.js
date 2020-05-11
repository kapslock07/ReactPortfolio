import React from "react";
import Row from "../Row";
import Col from "../Col";
import Header from '../Header';
import PortfolioItem from "../PortfolioItem";
import In2uned from '../../images/in2uned.jpeg';
import TuneMeIn from '../../images/tuneMeIn.jpeg';
import WeatherDash from '../../images/weatherDash.jpeg';
import DayPlanner from '../../images/dayPlanner.jpeg';
import PasswordGenerator from '../../images/Password-640x480.png';
import FitnessTracker from '../../images/fitnessTracker.jpg';


const cssStuff = {marginTop: "20px", marginBottom: "20px"}

function Portfolio() {
    return (
        <div>

            <Header value="Portfolio" />
            <Row className="mt-20" style={cssStuff}>
                <Col size="md-6">
                    <PortfolioItem href="http://quiet-thicket-75299.herokuapp.com/" src={In2uned} alt="in2uned" title="In2uned Music Reviews" />
                </Col>
                <Col size="md-6">
                    <PortfolioItem href="https://coreysalva.github.io/tune-me-in/" src={TuneMeIn} alt="Tune Me In" title="Tune Me In" />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <PortfolioItem href="https://kapslock07.github.io/WeatherDashboard/" src={WeatherDash} alt="Weather Dashboard" title="Weather Dashboard" />
                </Col>
                <Col size="md-6">
                    <PortfolioItem href="https://kapslock07.github.io/WorkDayScheduler/" src={DayPlanner} alt="Day Planner" title="Day Planner" />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <PortfolioItem href="http://kapslock07.github.io/PasswordGenerator/" src={PasswordGenerator} alt="Password Generator" title="Password Generator" />
                </Col>
                <Col size="md-6">
                    <PortfolioItem href="https://boiling-basin-56291.herokuapp.com/" src={FitnessTracker} alt="Fitness Tracker" title="Fitness Tracker" />
                </Col>
            </Row>

        </div >
    );
}

export default Portfolio;
