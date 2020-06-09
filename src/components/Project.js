import React from "react";


function Project(props) {
    return (
        <div className="project text-center mx-auto z-depth-2">
            <h3>{props.title}</h3>
            <a href={props.href}>
                <img src={props.src} alt={props.alt} width="320" height="240" />
            </a>

        </div >
    );
}

export default Project;
