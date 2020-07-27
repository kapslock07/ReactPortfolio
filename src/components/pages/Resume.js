import React from "react";
// import ResumeDoc from "../../assets/images/resume.pdf"
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
                    {/* <embed src={ResumeDoc} className="z-depth-2" width="75%" height="1000" /> */}
                    <iframe className="resume" src="https://docs.google.com/document/d/1--oCrJfuwaqlIYb1kMBmVvFPcUjacLGX3i_EM99hBwQ/preview" width="50%" height="1050" title="resume"></iframe>
                    {/* <img src={ResumeDoc} className="img-fluid" alt="Resume"></img> */}
                </Col>
            </Row>
        </Container >
    );
}

export default Resume;
