import React from "react";
import "./Card.css";
function ClickyCard(props) {
    return (
        <div className="card" onClick={() => props.clickCount(props.id)}>
            <div className="imgContainer">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default ClickyCard;