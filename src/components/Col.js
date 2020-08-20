import React from "react";



function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ") + " " + props.margin;

  return (
    <div className={size}>
      {props.children}

    </div>
  );
}

export default Col;
