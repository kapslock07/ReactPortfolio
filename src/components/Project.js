import React from "react";
import { MDBView } from "mdbreact";


function Project(props) {
    return (
        <MDBView hover zoom>
            <div className="project text-center mx-auto z-depth-2">
                <h3>{props.title}</h3>
                <a href={props.href}>
                    <img src={props.src} alt={props.alt} width="320" height="240" className="mt-4 mx-auto" />
                </a>
            </div >
        </MDBView>

    );
}

export default Project;
