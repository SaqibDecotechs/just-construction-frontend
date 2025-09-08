import React from 'react'
import "../../style/components/button.css"

const Button = ({ text, onClick }) => {
  return (
    <button className="tbBtn1" onClick={onClick}>
      <span className="text">{text}</span>
    </button>
  )
}

export default Button
  