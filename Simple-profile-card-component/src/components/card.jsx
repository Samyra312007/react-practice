import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.photo} alt="" />
      <h1>Name: {props.name}</h1>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default Card
