import React from "react";
import { Col } from 'react-bootstrap';



function Skills(props) {
    return (
        <Col lg={1} xl={1} className="skillRow text-center mx-auto">
            <div >
                <img src={props.src} alt={props.name} width={props.dimension} height={props.dimension} className="skillIcon" >
                </img>
                <div className={props.className}>{props.name}</div>
            </div>
        </Col>

    );
}

export default Skills;
