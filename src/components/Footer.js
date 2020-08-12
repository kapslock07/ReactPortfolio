import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <Container fluid >
            <Row className="mt-5">
                <Col md={4} />
                <Col md={1} xs={6} className="linkedinIcon my-auto">
                    <Link
                        to="linkedin">

                        <div className="navBtn mx-4 text-center">
                            <i className="icon fa fa-2x fa-linkedin my-3"></i>
                        </div>
                    </Link>
                </Col>
                <Col md={2} xs={6} className="githubIcon my-auto">
                    <Link
                        to="github">

                        <div className="navBtn text-center">
                            <i className="icon fa fa-2x fa-github my-3"></i>
                        </div>
                    </Link>
                    {/* <MDBIcon fa icon="github" href="https://github.com/kapslock07" /> */}
                </Col>
                <Col md={1}>
                    <div class="footer-copyright text-center my-3">© 2020
                    </div >
                </Col>
                <Col md={4} />

            </Row>
        </Container >
    );
}

export default Footer;
