import React from "react";
import headshot from '../../headshot.jpg';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid className="mainBody z-depth-2">
            <Row className="">

                <Col md={12}>
                    <Header value="About Me" />
                </Col>
            </Row>
            <Row>
                <Col md={5} className="mt-5 pl-5 text-center">
                    <img src={headshot} alt="headshot" width="75%" />
                </Col>
                <Col md={7} className="p-5">

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
