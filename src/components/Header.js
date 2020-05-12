import React from "react";

function Header(props) {
    return (
        <div>
            <h1 className="header text-center">{props.value}</h1>
        </div>
    );
}

export default Header;
