import React from "react";
import { MDBMask, MDBView } from "mdbreact";
import { Row, Col } from 'react-bootstrap';



function Project(props) {
    return (
        <div className="project text-center mx-auto z-depth-2">
            <MDBView hover zoom >
                <img src={props.src} alt={props.alt} className="img-fluid" width="100%" />
                <MDBMask className="mask" overlay="black-strong">
                    <div className="maskTitle mt-3">{props.title}</div>
                    <div className="maskTools mt-2">{props.tools}</div>
                    <div className="maskTools">{props.tools2}</div>
                    <div className="maskDescription my-2 px-4">{props.description}</div>
                    <div className="myRole my-2"><em><span className="myRoleLabel">My Role: </span>{props.role}</em></div>
                    <Row className="justify-content-center">
                        <Col xs={5}>
                            <a href={props.href} className="button siteBtn mx-3">View Site</a>
                        </Col>
                        <Col xs={5}>
                            <a href={props.github} className="button githubBtn mx-3">View Github</a>
                        </Col>
                    </Row   >
                    <Row className="login justify-content-center mt-2">{props.login}</Row>
                </MDBMask>
            </MDBView>
        </div >

    );
}

export default Project;
