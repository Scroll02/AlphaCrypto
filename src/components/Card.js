import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='wrapper'>
      <div className='card'>
          <div className='card__body'>
              <img src={props.img} className='card__image' />
              <h2 className='card__title'>{props.title}</h2>
              <p className='card__description'>{props.description}</p>
          </div>
          <button className='card__btn'>Read Full</button>
      </div>
    </div>
  )
}

export default Card
