import React from "react";

function Header(props) {
    return (
        <div>
            <div className="header text-center">{props.value}</div>
        </div>
    );
}

export default Header;
