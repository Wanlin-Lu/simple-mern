import React from "react";

import './Input.css'

const Input = props => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input;
