import { SearchOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Selection.css'
import SelectionOption from './SelectionOption'
import db from './firebase'
import Views from './Views'

function Selection() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        db.collection('pokemons').onSnapshot(snapshot =>(
            setPokemons(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))
    }, [])

    return (
        <div className='selection'>
            <div className='selection__header'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/87044f58-c765-43c5-bc51-8613e3ac7ab1/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png"/>
            </div>
            <div className='selection__options'>
                {pokemons.map(pokemon => (
                    <SelectionOption key={pokemon.id} id={pokemon.id}
                    name={pokemon.data.name}
                    image={pokemon.data.image}
                    type={pokemon.data.type}/>
                ))}
            </div>   
            <div className='selection__vistas'>
                <h1>
                    <Views />
                </h1>
            </div>
        </div>
    )
}

export default Selection