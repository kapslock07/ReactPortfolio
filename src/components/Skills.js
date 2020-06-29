import React from "react";
import { Col } from 'react-bootstrap';



function Skills(props) {
    return (
        <Col md={1} className="text-center">
            <div>
                <img src={props.src} alt={props.name} width="60px" height="60px" className="skillIcon" >
                </img>
                <h5 className="skillIconName mt-4">{props.name}</h5>
            </div>
        </Col>

    );
}

export default Skills;
