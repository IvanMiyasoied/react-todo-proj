import React from 'react'

function Button(props) {

    
    
  return (
    <button onClick={props.onClick} type={props.type}>{props.text}</button>

  )
}

export default Button