import React from "react";
import { MDBMask, MDBView } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import { Row, Col } from 'react-bootstrap';



function Project(props) {
    return (
        <div className="project text-center mx-auto z-depth-2">
            {/* <a href={props.href}> */}
            <MDBView hover zoom >
                <img src={props.src} alt={props.alt} className="img-fluid" width="100%" />
                <MDBMask className="mask" overlay="black-strong">
                    <div className="maskTitle mt-3">{props.title}</div>
                    <div className="maskTools mt-3">{props.tools}</div>
                    <div className="maskDescription my-3 px-4"><em>{props.description}</em></div>
                    <div className="myRole my-3">My Role: {props.role}</div>
                    <Row className="justify-content-center">
                        <Col xs={5}>
                            <a href={props.href} className="button siteBtn mx-3">View Site</a>
                        </Col>
                        <Col xs={5}>
                            <a href={props.github} className="button githubBtn mx-3">View Github</a>
                        </Col>
                    </Row   >
                </MDBMask>
            </MDBView>
            {/* </a> */}
        </div >

    );
}

export default Project;
