import React, { useMemo, useState, useEffect } from 'react'
import db from './firebase'
import './SelectionTable.css'
import SelectionOptionTable from './SelectionOptionTable';
import Views from './Views';

function SelectionTable() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    db.collection('pokemons').onSnapshot(snapshot =>(
      setPokemons(snapshot.docs.map(doc =>
        ({
            id: doc.id,
            data: doc.data(),
        })
      ))
    ))
  }, [])

    return(
      <div className='div'>
        <div className='selection__header'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/87044f58-c765-43c5-bc51-8613e3ac7ab1/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png"/>
            </div>
        <div className='view'>
          <table className='table'>
              <thead>
                <tr className="table__header">
                  <th>Pokemon</th>
                  <th>Tipo</th>
                  <th>Especie</th>
                </tr>
              </thead>
              <tbody>
                {pokemons.map(pokemon => {
                  return(
                    <tr>
                      <td><SelectionOptionTable key={pokemon.id} id={pokemon.id}
                          name={pokemon.data.name}/></td>
                      <td><SelectionOptionTable key={pokemon.id} id={pokemon.id}
                          type={pokemon.data.type}/></td>
                      <td><SelectionOptionTable key={pokemon.id} id={pokemon.id}
                          species={pokemon.data.species}/></td>
                    </tr>
                  )
                })}
              </tbody>
          </table>
        </div>
        
        <div>
          <h1>
            <Views />
          </h1>
        </div>
      </div>
    )

}

export default SelectionTable;