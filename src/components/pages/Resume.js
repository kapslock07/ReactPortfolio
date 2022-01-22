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
                    <iframe className="resume" src="https://drive.google.com/file/d/1Sa_c7y2vQqclJ4R0DgF2ueh_vGrvSFHk/preview" allow="autoplay" width="50%" height="1050" title="resume"></iframe>
                </Col>
            </Row>
        </Container >
    );
}

export default Resume;
