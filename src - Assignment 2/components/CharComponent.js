import React from "react";

const styles = {
    display: inline-block;
    padding: 16px;
    text-align: center;
    margin: 16px;
    border: 1px solid black;
}   

const Char = (props) => (
    
    <div style = {styles}>
        <p>{props.letter}</p>
    </div>
)

export default Char;