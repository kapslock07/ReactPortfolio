import React from "react";
import headshot from '../../headshot.jpg';
import Header from '../Header';
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
                <Row className="skillIconRow justify-content-center">
                    <Col md={1} className="text-center mt-3">
                        <div>
                            <img src={HTML} alt="HTML5" width="60px" height="60px" className="skillIcon mx-2 mt-2" >
                            </img>
                            <h5 className="skillIconName mt-4">HTML5</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center mt-3">
                        <div>
                            <img src={CSS} alt="CSS3" width="60px" height="60px" className="skillIcon mx-2 mt-2" >
                            </img>
                            <h5 className="skillIconName mt-4">CSS3</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center mt-3">
                        <div>
                            <img src={Javascript} alt="Javascript" width="80px" height="80px" className="skillIcon mx-2" >
                            </img>
                            <h5 className="skillIconName mt-4">Javascript</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center mt-3">
                        <div>
                            <MDBIcon fab icon="bootstrap" size="4x" className="skillIcon mt-2" />
                            <h5 className="skillIconName mt-4">Bootstrap</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center mt-3">
                        <div>
                            <MDBIcon fab icon="node" size="4x" className="skillIcon mx-2 mt-2" />
                            <h5 className="skillIconName mt-4">Node</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center mt-3">
                        <div>"
                            <MDBIcon fab icon="npm" size="4x" className="skillIcon mx-2 mt-2" />
                            <h5 className="skillIconName mt-4">NPM</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center mt-3">
                        <div>
                            <MDBIcon fab icon="react" size="4x" className="skillIcon mx-2 mt-2" />
                            <h5 className="skillIconName mt-4">React</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center">
                        <div>
                            <img src={MySQL} alt="MySQL" width="100px" height="100px" className="skillIcon mx-2" >
                            </img>
                            <h5 className="skillIconName">MySQL</h5>
                        </div>
                    </Col>
                    <Col md={1} className="text-center">
                        <div>
                            <img src={Mongo} alt="MongoDB" width="100px" height="100px" className="skillIcon mx-2" >
                            </img>
                            <h5 className="skillIconName">MongoDB</h5>
                        </div>
                    </Col>
                </Row>
            </MDBAnimation>

            <MDBAnimation type="fadeInLeft">
                <Row className="skillIconRow justify-content-center">
                    <Skills src={HTML} name="HTML5" />
                    <Skills src={CSS} name="CSS3" />
                    <Skills src={Javascript} name="Javascript" />
                    <Skills src={Bootstrap} name="Bootstrap" />
                    <Skills src={Node} name="Node" />
                    <Skills src={NPM} name="NPM" />
                    <Skills src={ReactIcon} name="React" />
                    <Skills src={MySQL} name="MySQL" />
                    <Skills src={Mongo} name="Mongo" />

                </Row>
            </MDBAnimation>



            {/* <MDBAnimation type="flipInY" className="delay-1s">
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
                            <h5 className="strengthDescription mt-4">Creative</h5>
                        </div>
                    </Col>
                    <Col md={2} className="text-center">
                        <div>
                            <MDBIcon icon="palette" size="4x" className="strengthIcon" />
                            <h5 className="strengthDescription mt-4">Intuitive UI</h5>
                        </div>
                    </Col>
                </Row>
            </MDBAnimation> */}

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


            <MDBAnimation type="fadeInLeft" className="delay-1s">
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
