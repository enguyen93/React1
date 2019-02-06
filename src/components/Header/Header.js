import React from "react";
import "./Header.css"

function Header(props) {
    return (
        <div className="Header">
            <div className="title">{props.children}</div>
            <div className="scores">
                Score: {props.score} Highscore: {props.highscore}
            </div>
            <div className="messageUpdate">
                {props.messageUpdate}
            </div>
        </div>
    );
}

export default Header;