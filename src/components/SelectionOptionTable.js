import React from 'react'
import { Avatar } from "@mui/material"
import './SelectionOptionTable.css'
import { Link } from "react-router-dom"

function SelectionOptionTable( {id, name, species, type}) {
    return (
        <Link to={`/table/pokemons/${id}`}>
            <div className='selectionTable__option'>
                <div className='selectionTable__info'>
                    <h3>
                        {name}
                        {type}
                        {species}
                    </h3>
                </div>
            </div>
        </Link>
    )
}

export default SelectionOptionTable
