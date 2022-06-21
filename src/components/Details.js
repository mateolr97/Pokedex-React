import React, { useState, useEffect } from 'react';
import './Details.css';
import { useParams } from "react-router-dom";
import db from "./firebase"

function Details() {
    const { pokemonId } = useParams();
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonType, setPokemonType] = useState("");
    const [PokemonSpecies, setPokemonSpecies] = useState("");
    const [PokemonAbility1, setPokemonAbility1] = useState("");
    const [PokemonAbility2, setPokemonAbility2] = useState("");
    const [PokemonImage, setPokemonImage] = useState("");
    const [PokemonHeight, setPokemonHeight] = useState("");
    const [PokemonWeight, setPokemonWeight] = useState("");

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonName(snapshot.data().name)
            ))
        }
    }, [pokemonId])

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonType(snapshot.data().type)
            ))
        }
    }, [pokemonId])

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonSpecies(snapshot.data().species)
            ))
        }
    }, [pokemonId])

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonAbility1(snapshot.data().ability1)
            ))
        }
    }, [pokemonId])

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonAbility2(snapshot.data().ability2)
            ))
        }
    }, [pokemonId])

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonImage(snapshot.data().image)
            ))
        }
    }, [pokemonId])

    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonHeight(snapshot.data().height)
            ))
        }
    }, [pokemonId])
    
    useEffect(() => {
        if (pokemonId){
            db.collection('pokemons').doc(pokemonId).onSnapshot(snapshot =>
                (setPokemonWeight(snapshot.data().weight)
            ))
        }
    }, [pokemonId])
    if(pokemonId){

    return (
        <div className='details'>
            <div className='details__name'>
                <h1>
                    {pokemonName}
                </h1>
            </div>
            <div className='details__image'>
                <img src={PokemonImage}/>
            </div>
            <div className='details__info'>
                <h2>
                    Tipo: {pokemonType}
                </h2>
                <h2>
                    Especie: {PokemonSpecies}
                </h2>
                <h2>
                    {"Habilidades: \n"}
                    {PokemonAbility1}
                    {","}
                    {"\n"}
                    {PokemonAbility2}
                </h2>
                <h2>
                    Altura: {PokemonHeight}
                </h2>
                <h2>
                    Peso: {PokemonWeight}
                </h2>
            </div>
        </div>
    )}
}

export default Details
