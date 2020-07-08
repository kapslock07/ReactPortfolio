import React from "react";
import headshot from '../../headshot.jpg';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { MDBIcon, MDBAnimation } from "mdbreact";
import HTML from "../../assets/images/html.png"
import CSS from "../../assets/images/css.png"
import Javascript from "../../assets/images/javascript.png"
import Bootstrap from "../../assets/images/bootstrap.png"
import Node from "../../assets/images/node.png"
import NPM from "../../assets/images/npm.png"
import ReactIcon from "../../assets/images/react.png"
import MySQL from "../../assets/images/mysql.png"
import Mongo from "../../assets/images/mongo.png"
import Skills from "../Skills";



function Home() {

    return (
        <Container fluid >
            {/* <Row>
                <Col md={12}>
                    <Header value="About Me" />
                </Col>
            </Row> */}

            <Row className="my-5">
                <Col lg={4}>
                    <MDBAnimation type="fadeInLeft">
                        <img src={headshot} alt="headshot" className="headshot img-fluid rounded-circle z-depth-4 mx-auto d-block" />
                    </MDBAnimation>
                </Col>
                <Col lg={7} className="my-auto">
                    <MDBAnimation type="fadeInRight">
                        <div className="myDetails d-block pb-3 mx-auto">
                            <div className="myName text-center">Ryan Kaplan</div>
                            <div className="myDescription text-center">Full Stack Web Developer | Marketing Expertise</div>
                        </div>
                    </MDBAnimation>
                </Col>
            </Row>
            <MDBAnimation type="fadeInUp" className="delay-1s">
                <div className="skillsSection rounded mx-auto">
                    <Row>
                        <Col md={12} className="text-center mt-3">
                            <MDBAnimation type="fadeInUp" className="delay-1s">
                                <h2 className="skillsHeader mb-3">Technical Skills</h2>
                            </MDBAnimation>
                        </Col>
                    </Row>
                    <MDBAnimation type="fadeInUp" className="delay-1s">
                        <Row className="skillIconRow justify-content-center mb-5">
                            <Skills src={HTML} name="HTML5" dimension="60px" class="skillIconName pt-2" />
                            <Skills src={CSS} name="CSS3" dimension="60px" class="skillIconName pt-2" />
                            <Skills src={Javascript} name="Javascript" dimension="60px" class="skillIconName pt-2" />
                            <Skills src={Bootstrap} name="Bootstrap" dimension="60px" class="skillIconName pt-2" />
                            <Skills src={Node} name="Node" dimension="70px" class="skillIconName" />
                            <Skills src={NPM} name="NPM" dimension="70px" class="skillIconName" />
                            <Skills src={ReactIcon} name="React" dimension="60px" class="skillIconName pt-2" />
                            <Skills src={MySQL} name="MySQL" dimension="70px" class="skillIconName" />
                            <Skills src={Mongo} name="MongoDB" dimension="60px" class="skillIconName pt-2" />
                        </Row>
                    </MDBAnimation>
                </div>
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


            <MDBAnimation type="fadeInUp" className="delay-1s">
                <Row className="mainBody mt-4 mx-auto">

                    <Col md={12} className="px-4 pt-4 pb-1 text-center">

                        {/* BUILD AN "RK" LOGO FOR BRAND IMAGE */}

                        {/* PORTFOLIO -USE LARGER IMGS */}

                        {/* Make more responsive - especially portfolio box overlay and descriptons (don't always fit) */}

                        {/* Build a 404 page */}

                        {/* Build a loading page for external links or get rid of blank page between pages */}

                        <MDBAnimation type="fadeInUp" className="delay-1s">
                            <p>My name is Ryan Kaplan. I am looking to continue to grow as a developer by applying the strengths I have and pushing myself to constantly learn new ones.</p>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" className="delay-1s">
                            <p>I received a Bachelor of Business Administration degree with a concentration in marketing from the George Washington University in Washington D.C.  and an MBA in Entrepreneurial Studies from Pace University in NYC. I just earned a certificate for Full Stack Web Development from Rutgers University in New Jersey.</p>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" className="delay-1s">
                            <p>For the last 9 years I have been working in marketing and sales, but I believe that my intelligence, creativity, and interests are better served by a career in coding. I am an innovative problem solver and am extremely passionate about coding.</p>
                        </MDBAnimation>

                    </Col>
                </Row>
            </MDBAnimation>
        </Container >
    );
}

export default Home;
