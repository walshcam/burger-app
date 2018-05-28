import React from "react";

const divStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
}   

const Char = (props) => (
    
    <div style = {divStyle} onClick = {props.click}>
        <p>{props.letters}</p>
    </div>
)

export default Char;