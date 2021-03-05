import React, { Component } from 'react'
import './Button.css'
// Se o componente precisar de props seguir este padrão de
// Arrow Function
export default props => {
    // Para as classes de estilizações
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}