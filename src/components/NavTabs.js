import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-light" >Ryan Kaplan</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                    <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavTabs;