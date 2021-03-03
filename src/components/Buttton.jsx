import React, { Component } from 'react'
import './Button.css'
// Se o componente precisar de props seguir este padrão de
// Arrow Function
export default props =>
    <button className="button">{props.label}</button>
