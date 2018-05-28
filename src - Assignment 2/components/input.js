import React from "react";

const Input = (props) => (
    <div>
        <input input = {props.inputValue} type = "text" onChange = {props.updateInputValue} />
        <p>{props.stringLength}</p>
    </div>
)

export default Input;