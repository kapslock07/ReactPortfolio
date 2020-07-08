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
            <Row className="ml-5 contactBody mt-5 z-depth-2 mx-auto texgt-light" >
                <Col md={12}>
                    <h1 className="subHeader text-center">Ready to work together?</h1>
                    <a href="mailto:ryankaplan7@gmail.com"><h2>SHOOT ME AN EMAIL: ryankaplan7@gmail.com</h2></a>
                    <br />
                    <a href="tel:631-662-2604"><h2>CALL MY CELL: 631-662-2604</h2></a>



                </Col>
            </Row>
        </Container >
    );
}

export default Contact;
