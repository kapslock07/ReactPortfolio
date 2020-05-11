import React from "react";


function PortfolioItem(props) {
    return (
        <div className="bt-6">
            <a href={props.href}>
                <img src={props.src} alt={props.alt} />
            </a>
            <h3>{props.title}</h3>
        </div >
    );
}

export default PortfolioItem;
