import React from "react";
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


function Contact() {
    return (
        <Container fluid className="portfolioBody">
            <Row className="headerBox z-depth-2">
                <Col md={12}>
                    <Header value="Contact" />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={12}>
                    <form>
                        <div className="grey-text">
                            <MDBInput label="Your name" className="white-text" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                            <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                        </div>
                        <div className="text-center">
                            <MDBBtn outline color="grey" className="z-depth-1">
                                Send
                            <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container >
    );
}

export default Contact;
