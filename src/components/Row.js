import React from "react";

function Row(props) {

  return <div className={props.className} id={props.id}>{props.children}</div>;
}

export default Row;
