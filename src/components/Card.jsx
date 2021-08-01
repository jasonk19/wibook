import React from 'react'
import '../assets/styles/Card.scss'

function Card(props) {
  return (
    <div className='Card'>
      <a
        href={props.href}
        target='_blank'
        rel='noreferrer'
      > 
        <h3>{props.ranking}</h3>
        <figure>
          <img 
            src={props.src}
            alt={props.alt}
          />
        </figure>
        <h3>{props.name}</h3>
      </a>
    </div>
  )
}

export default Card
