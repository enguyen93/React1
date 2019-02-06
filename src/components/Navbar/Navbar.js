import React from "react";
import "./Navbar.css"

function Navbar(props) {
    return (
        <div className="Navbar">
            <div className="title">{props.children}</div>
            <div className="scores">
                Clicky Game!
            </div>
        </div>
    );
}

export default Navbar;