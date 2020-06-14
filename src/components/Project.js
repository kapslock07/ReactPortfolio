import React from "react";
import { MDBMask, MDBView } from "mdbreact";



function Project(props) {
    return (
        <div className="project text-center mx-auto">
            {/* <a href={props.href}> */}
            <MDBView hover >
                <img src={props.src} alt={props.alt} className="img-fluid z-depth-2" />
                <MDBMask className="mask" overlay="white-strong">
                    <h1 className="maskTitle mt-5">{props.title}</h1>
                    <h3 className="maskTools mt-3">{props.tools}</h3>
                    <h5 className="maskDescription mt-3 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                    <a href={props.href} className="button siteBtn mx-3">View Site</a>
                    <a href={props.github} className="button githubBtn mx-3">View Github</a>
                </MDBMask>
            </MDBView>
            {/* </a> */}
        </div >

    );
}

export default Project;
