import React from 'react'
import { Avatar } from "@mui/material"
import './SelectionOption.css'

function SelectionOption( {id, name}) {
    return (
        <div className='selection__option'>
            <div className='selection__avatar'>
                <Avatar src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"/>
            </div>
            <div className='selection__info'>
                <h3>
                    {name}
                </h3>
                <p>
                    {id}
                </p>
            </div>
        </div>
    )
}

export default SelectionOption
