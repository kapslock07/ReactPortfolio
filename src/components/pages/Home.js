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
                    {/* PORTFOLIO -USE LARGER IMGS, ADD LAYER ON HOVER WITH NAME, DESC, TECH, GITHUB LINK */}

                    {/* Build a 404 page */}

                    {/* Build a loading page for external links or get rid of blank page between pages */}

                    {/* CHANGE DESIGN - DARK BACKGROUND LIGHTER IN CORNER & BOTTOM NAV OBRDER (LIKE HULU)m-maybe charcoal (gradient--> slightly lighter grey in bottom right corner) with plain orange line/accents */}

                    {/* Icons representing characteristics with accordian descripions */}

                    <p>My name is Ryan Kaplan. I am looking to continue to grow as a developer by applying the skills I have and pushing myself to constantly learn new ones.</p>

                    <p>I received a Bachelor of Business Administration degree with a concentration in marketing from the George Washington University in Washington D.C.  and an MBA in Entrepreneurial Studies from Pace University in NYC. I just earned a certificate for Full Stack Web Development from Rutgers University in New Jersey.</p>

                    <p>For the last 9 years I have been working in marketing and sales, but I believe that my intelligence, creativity, and interests are better served by a career in coding. I am an innovative problem solver and am extremely passionate about coding.</p>

                </Col>
            </Row>
        </Container >
    );
}

export default Home;
