import React from "react";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} mt-20`} style={props.style}>{props.children}</div>;
  return <div {...props}>{props.children}</div>;
  return <div className={props.className + " mt-20"} id={props.id}>{props.children}</div>;
}

export default Row;
