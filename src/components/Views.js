import React from 'react'
import './Views.css'
import { Link } from 'react-router-dom'


function Views({id}) {
  return (
    <div className='viewSelection'>
    <Link to={`/list/pokemons/${id}`}>
          <div className='viewSelection__option'>
            <h3>Lista</h3>
          </div>
      </Link>
    <Link to={`/pokemons/${id}`}>
          <div className='viewSelection__option'>
            <h3>Galeria</h3>
          </div>
      </Link>
    <Link to={`/table/pokemons/${id}`}>
          <div className='viewSelection__option'>
            <h3>Tabla</h3>
          </div>
      </Link>
    </div>
  )
}

export default Views
