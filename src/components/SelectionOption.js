import React from 'react'
import { Avatar } from "@mui/material"
import './SelectionOption.css'
import { Link } from "react-router-dom"

function SelectionOption( {id, name, image, type}) {
    return (
        <Link to={`/pokemons/${id}`}>
            <div className='selection__option'>
                <div className='selection__avatar'>
                    <Avatar src={image}/>
                </div>
                <div className='selection__info'>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {type}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SelectionOption
