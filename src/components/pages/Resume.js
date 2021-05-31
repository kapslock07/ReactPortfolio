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
                    <iframe className="resume" src="https://docs.google.com/document/d/1w_ZP1t_vVnhoFZv8fOo9b1HlMm0hKeYr/preview" width="50%" height="1050" title="resume"></iframe>
                </Col>
            </Row>
        </Container >
    );
}

export default Resume;
