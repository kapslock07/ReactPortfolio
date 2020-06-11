import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <Container fluid >
            <Row>
                <Col md={4} />
                <Col md={2}>
                    <div class="footer-copyright text-center py-5">© 2020
                    </div >
                </Col>
                <Col md={1} className="githubIcon my-auto">
                    <Link
                        to="github">

                        <div className="navBtn mx-4 text-center">
                            <i className="icon fa fa-2x fa-github"></i>
                            {/* <h5>Github</h5> */}
                        </div>
                    </Link>
                    {/* <MDBIcon fa icon="github" href="https://github.com/kapslock07" /> */}
                </Col>
                <Col md={1} className="linkedinIcon my-auto">
                    <Link
                        to="linkedin">

                        <div className="navBtn mx-4 text-center">
                            <i className="icon fa fa-2x fa-linkedin"></i>
                        </div>
                    </Link>                </Col>
                <Col md={4} />

            </Row>
        </Container >
    );
}

export default Footer;
