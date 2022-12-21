import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Style/PokemonCard.css"

const PokemonCard = ({pokemon}) => {

    const [dataPokemon, setDataPokemon] = useState()

        const navigate = useNavigate ()

    const handleClickPokemon = () =>{
        navigate(`/pokedex/${dataPokemon?.id}`)
    }


    useEffect (()=>{
        axios.get(pokemon.url)
        .then(res=> setDataPokemon(res.data))
        .catch(err=>console.log(err))
    }
    , [])

    const types = dataPokemon?.types.map(type => type.type.name).join(" / ")

    return (
    <article onClick={handleClickPokemon} className={`pokeCard border-${dataPokemon?.types[0].type.name}`}>
        <section className={`pokeCard_header bg-lg-${dataPokemon?.types[0].type.name}`} ></section>
        <section className='pokeCard_content'>
            <img className='pokeCard_i' src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" />
            <h3 className='pokeCard_name'>{pokemon.name}</h3>
            <p className='pokeCard_types'>{types}</p>
            <p className='pokeCard_title'>Type:</p>
            <hr />
            <section className='pokeCard_stats'>
                {
                    dataPokemon?.stats.map(stat =>(
                    <div key={stat.stat.name} className='pokeCard-stat'>
                    <p className='pokeCard-Statname'>{stat.stat.name}</p>
                    <p className='pokeCard-Statvalue'>{stat.base_stat}</p>
                </div>
                        ) )
                }
                
            </section>
        </section>
        
    </article>
    )
}

export default PokemonCard