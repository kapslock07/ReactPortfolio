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
                    <iframe className="resume" src="https://drive.google.com/file/d/1l9a4BQZ8BApFfmloApGxkiL3U3zinEfw/preview" allow="autoplay" width="50%" height="1050" title="resume"></iframe>
                </Col>
            </Row>
        </Container >
    );
}

export default Resume;
