import React from 'react'
import './Details.css'

function Details() {
  return (
    <div className='details'>
        <div className='details__name'>
            <h1>
                Pikachu
            </h1>
        </div>
        <div className='details__image'>
            <img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"/>
        </div>
        <div className='details__info'>
            <h2>
                Tipo:
            </h2>
            <h2>
                Especie:
            </h2>
            <h2>
                Habilidades:
            </h2>
        </div>
        <div className='details__evolutions'>

        </div>
    </div>
  )
}

export default Details
