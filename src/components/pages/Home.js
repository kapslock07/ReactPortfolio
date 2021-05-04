import React from "react";
import headshot from '../../headshot.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBAnimation } from "mdbreact";
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
                            <MDBAnimation type="fadeInRight">
                                <div className="myDescription text-center">Full Stack Web Development | Marketing Expertise</div>
                            </MDBAnimation>
                        </div>
                    </MDBAnimation>
                </Col>
            </Row>
            <MDBAnimation type="fadeInUp" className="delay-1s">
                <div className="skillsSection rounded mx-auto">
                    <Row>
                        <Col md={12} className="text-center mt-3">
                            <MDBAnimation type="fadeInUp" className="delay-1s">
                                <div className="skillsHeader mb-4">Technical Skills</div>
                            </MDBAnimation>
                        </Col>
                    </Row>
                    <MDBAnimation type="fadeInUp" className="delay-1s">
                        <Row className="skillIconRow justify-content-center mb-2 text-center">
                            <Skills src={HTML} name="HTML5" dimension="60px" className="skillIconName pt-2" />
                            <Skills src={CSS} name="CSS3" dimension="60px" className="skillIconName pt-2" />
                            <Skills src={Javascript} name="Javascript" dimension="60px" className="skillIconName pt-2" />
                            <Skills src={Bootstrap} name="Bootstrap" dimension="60px" className="skillIconName pt-2" />
                            <Skills src={Node} name="Node" dimension="70px" className="skillIconName" />
                            <Skills src={NPM} name="NPM" dimension="70px" className="skillIconName" />
                            <Skills src={ReactIcon} name="React" dimension="60px" className="skillIconName pt-2" />
                            <Skills src={MySQL} name="MySQL" dimension="70px" className="skillIconName" />
                            <Skills src={Mongo} name="MongoDB" dimension="60px" className="skillIconName pt-2" />
                        </Row>
                    </MDBAnimation>
                </div>
            </MDBAnimation>


            <MDBAnimation type="fadeInUp" className="delay-1s">
                <Row className="mainBody mt-2 mx-auto">

                    <Col md={12} className="px-4 pt-4 pb-1 text-center">

                        {/* PORTFOLIO -USE LARGER IMGS */}

                        {/* Build a 404 page */}

                        {/* Build a loading page for external links or get rid of blank page between pages */}

                        <MDBAnimation type="fadeInUp" className="delay-2s">
                            <p className="pBorder">My name is Ryan Kaplan. I am a creative full stack web developer leveraging a marketing and sales background to create intuitive and responsive applications with a focus on UI/UX.</p>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" className="delay-2s">
                            <p className="pBorder">I received a Bachelor of Business Administration degree with a concentration in marketing from the George Washington University in Washington D.C. and an MBA in Entrepreneurial Studies from Pace University in NYC. These experiences helped me understand how a successful business should operate and market itself using the tools at its disposal.</p>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" className="delay-2s">
                            <p className="pBorder">In 2020 I earned a certificate for Full Stack Web Development from Rutgers University in New Jersey to give me the ability to create new tools.  I completed over 100 hours of hands-on object-oriented programming challenges individually and in groups. My final two projects demonstrate my coding abilities as well as user-friendly design.</p>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" className="delay-2s">
                            <p>My education, experience in problem solving to overcome challenges in individual and group settings, and passion for coding make me an ideal employee/partner to work with.</p>
                        </MDBAnimation>
                    </Col>
                </Row>
            </MDBAnimation>
        </Container >
    );
}

export default Home;
