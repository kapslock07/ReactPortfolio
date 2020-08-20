import React from "react";
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
    return (
        <Container fluid >
            <Row>

                <Col md={12}>
                    <Header value="Resume" />
                </Col>
            </Row>
            <Row className="resumeBody mt-4 mx-auto">
                <Col lg={12} className="mt-4 text-center">
                    <iframe className="resume" src="https://docs.google.com/document/d/18_iDz0rK6N2yYneOL3V-aHSqRs2E5vqy/preview" width="50%" height="1050" title="resume"></iframe>
                </Col>
            </Row>
        </Container >
    );
}

export default Resume;
