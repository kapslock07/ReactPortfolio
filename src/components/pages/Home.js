import React from "react";
import headshot from '../../headshot.jpg';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid >
            <Row>

                <Col md={12}>
                    <Header value="About Me" />
                </Col>
            </Row>
            <Row className="mainBody z-depth-2 mt-4 mx-auto">
                <Col md={5} className="mt-4 text-center">
                    <img src={headshot} alt="headshot" width="70%" />
                </Col>
                <Col md={7} className="px-4 pt-4 pb-1">

                    {/* BUILD AN "RK" LOGO FOR BRAND IMAGE */}

                    {/* CHANGE DESIGN - DARK BACKGROUND LIGHTER IN CORNER & BOTTOM NAV OBRDER (LIKE HULU)m-maybe charcoal (gradient--> slightly lighter grey in bottom right corner) with plain orange line/accents */}

                    {/* Icons representing characteristics with accordian descripions */}

                    <p>My name is Ryan Kaplan. I am looking to make a big change in careers so that I can better provide for my family and love what I do.</p>

                    <p>I received a Bachelor of Business Administration degree with a concentration in marketing from the George Washington University in Washington D.C. I also have an MBA in Entrpreneurial Studies from Pace University in NYC.</p>

                    <p>For the last 8 years I have been working in marketing and sales. I believe that my intelligence, creativity, and interests are better served by a career in coding.</p>

                    <p>I am currently married, have 3 kids, and live in West Orange, NJ. In my free time I love to listen to podcasts and music, see live shows, and play video games.</p>
                </Col>
            </Row>
        </Container >
    );
}

export default Home;
