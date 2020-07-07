import React from "react";
import { Col } from 'react-bootstrap';



function Skills(props) {
    return (
        <Col lg={3} xl={1} className="text-center mx-auto">
            <div >
                <img src={props.src} alt={props.name} width={props.dimension} height={props.dimension} className="skillIcon" >
                </img>
                <h5 className={props.class}>{props.name}</h5>
            </div>
        </Col>

    );
}

export default Skills;
