import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from 'react-bootstrap';

function NavTabs() {

    const location = useLocation();

    return (

        <nav className="navbar navbar-expand-lg navbar-dark mb-4">
            <Navbar.Brand href="/" className="navbar-brand text-light">
                <div className="text-center">
                    <div className="brandInitials">R|K</div>
                    <div className="brandName ml-2">Ryan Kaplan</div>
                </div>
            </Navbar.Brand>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active mx-2" : "nav-link mx-2"}>Home</Link>
                    <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active mx-2" : "nav-link mx-2"}>Portfolio</Link>
                    <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active mx-2" : "nav-link mx-2"}>Resume</Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active mx-2" : "nav-link mx-2"}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavTabs;
