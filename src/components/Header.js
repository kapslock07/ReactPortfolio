import React from "react";

function Header(props) {
    return (
        <div>
            <h1 class="header">{props.value}</h1>
        </div>
    );
}

export default Header;
