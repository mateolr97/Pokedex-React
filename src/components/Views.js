import React from 'react'
import './Views.css'
import { Link } from 'react-router-dom'


function Views() {
  return (
    <div className='viewSelection'>
    <Link to={"/List"}>
          <div className='viewSelection__option'>
            <h3>Lista</h3>
          </div>
      </Link>
    <Link to={"/"}>
          <div className='viewSelection__option'>
            <h3>Galeria</h3>
          </div>
      </Link>
    <Link to={"/table"}>
          <div className='viewSelection__option'>
            <h3>Tabla</h3>
          </div>
      </Link>
    </div>
  )
}

export default Views
