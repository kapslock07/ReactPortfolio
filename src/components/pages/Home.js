import React from "react";
import headshot from '../../headshot.jpg';
import Header from '../Header';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { MDBIcon, MDBAnimation } from "mdbreact";

function Home() {

    return (
        <Container fluid >
            <Row>
                <Col md={12}>
                    <Header value="About Me" />
                </Col>
            </Row>
            <MDBAnimation type="flipInY">
                <Row>
                    <Col md={12} className="text-center mt-4">
                        <h2>Skills</h2>
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="fadeInLeft">
                <Row className="skillIconRow justify-content-center my-3">
                    <Col md={1} className="text-center">
                        <div>
                            <MDBIcon fab icon="js" size="4x" className="skillIcon mx-2" />
                            <h5 className="skillIconName">Javascript</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center">
                        <div>
                            <MDBIcon fab icon="bootstrap" size="4x" className="skillIcon" />
                            <h5 className="skillIconName">Bootstrap</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center">
                        <div>
                            <MDBIcon fab icon="node" size="4x" className="skillIcon mx-2" />
                            <h5 className="skillIconName">Node</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center">
                        <div>
                            <MDBIcon fab icon="npm" size="4x" className="skillIcon mx-2" />
                            <h5 className="skillIconName">NPM</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center">
                        <div>
                            <MDBIcon fab icon="react" size="4x" className="skillIcon mx-2" />
                            <h5 className="skillIconName">React</h5>
                        </div>
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="flipInY" className="delay-1s">
                <Row>
                    <Col md={12} className="text-center mt-4">
                        <h2>Strengths</h2>
                    </Col>
                </Row>
            </MDBAnimation>
            <MDBAnimation type="fadeInLeft" className="delay-1s">
                <Row className="strengthIconRow justify-content-center my-3">
                    <Col md={2} className="text-center">
                        <div>
                            <MDBIcon icon="lightbulb" size="4x" className="strengthIcon" />
                            <h5 className="strengthDescription">Creative</h5>
                        </div>
                    </Col>
                    <Col md={2} className="text-center">
                        <div>
                            <MDBIcon icon="palette" size="4x" className="strengthIcon" />
                            <h5 className="strengthDescription">Intuitive UI</h5>
                        </div>
                    </Col>
                </Row>
            </MDBAnimation>

            {/* <Row>
                <Col md={12} className="text-center">
                    <Accordion>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <i className="traitIcon1 fas fa-4x fa-lightbulb"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>

                    </Accordion>
                </Col>
            </Row> */}


            <MDBAnimation type="fadeInUp" className="delay-2s">
                <Row className="mainBody z-depth-2 mt-4 mx-auto">
                    <Col md={5} className="mt-4 text-center">
                        <img src={headshot} alt="headshot" width="70%" />
                    </Col>
                    <Col md={7} className="px-4 pt-4 pb-1">

                        {/* BUILD AN "RK" LOGO FOR BRAND IMAGE */}

                        {/* PORTFOLIO -USE LARGER IMGS */}

                        {/* Make more responsive - especially portfolio box overlay and descriptons (don't always fit) */}

                        {/* Build a 404 page */}

                        {/* Build a loading page for external links or get rid of blank page between pages */}

                        {/* Icons representing characteristics with accordian descripions */}

                        <p>My name is Ryan Kaplan. I am looking to continue to grow as a developer by applying the strengths I have and pushing myself to constantly learn new ones.</p>

                        <p>I received a Bachelor of Business Administration degree with a concentration in marketing from the George Washington University in Washington D.C.  and an MBA in Entrepreneurial Studies from Pace University in NYC. I just earned a certificate for Full Stack Web Development from Rutgers University in New Jersey.</p>

                        <p>For the last 9 years I have been working in marketing and sales, but I believe that my intelligence, creativity, and interests are better served by a career in coding. I am an innovative problem solver and am extremely passionate about coding.</p>

                    </Col>
                </Row>
            </MDBAnimation>
        </Container >
    );
}

export default Home;
