import React from 'react'
import './Card.css'

const Card = ({ children, className }) => {
  const classes = className + ' card'
  return <div className={classes}>{children}</div>
}

export default Card
