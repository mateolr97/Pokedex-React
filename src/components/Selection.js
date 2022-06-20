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
                <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"/>
            </div>
            <div className='selection__search'>
                <div className='search__container'>
                    <SearchOutlined />
                    <input placeholder="Buscar" type="text"/>
                </div>
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