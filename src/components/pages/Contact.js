import React from "react";
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';


function Contact() {
    return (
        <Container fluid className="portfolioBody">
            <Row className="headerBox">
                <Col md={12}>
                    <Header value="Contact" />
                </Col>
            </Row>
            <Row className="contactBody mt-5 z-depth-2 mx-auto text-light" >
                <Col md={12}>
                    <div className="subHeader text-center">Ready to work together?</div>
                    <div className="contactRow">
                        <a href="mailto:ryankaplan7@gmail.com">
                            <i className="fas fa-paper-plane contactEmail"></i>
                            <div className="contactEmail ml-3">ryankaplan7@gmail.com</div>
                        </a>
                    </div>
                    <div className="contactRow">
                        <a href="tel:631-662-2604">
                            <i className="fas fa-phone contactPhone"></i>
                            <div className="contactPhone ml-3">631-662-2604</div>
                        </a>
                    </div>
                    <div className="contactRow">
                        <a href="https://www.linkedin.com/in/ryankaplan7/">
                            <i className="icon fa fa-linkedin contactLinkedin"></i>
                            <div className="contactLinkedin ml-3">LinkedIn</div>
                        </a>
                    </div>
                    <div className="contactRow">
                        <a href="https://github.com/kapslock07">
                            <i className="icon fa fa-github contactGithub"></i>
                            <div className="contactGithub ml-3">Github</div>
                        </a>
                    </div>
                </Col>

            </Row>
        </Container >
    );
}

export default Contact;