import React from "react";

function Row(props) {
  // return <div className={`row${props.fluid ? "-fluid" : ""} mt-5`} style={props.style}>{props.children}</div>;
  // return <div {...props}>{props.children}</div>;
  return <div className={props.className} id={props.id}>{props.children}</div>;
}

export default Row;
