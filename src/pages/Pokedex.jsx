import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListPokemons from '../components/ListPokemons'
import { paginationLogic } from '../helpers/paginationLogic'
import "./styles/Pokedex.css"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFilter, setPokemonsFilter] = useState([])
    const [types, setTypes] = useState([])
    const [namePokemon, setNamePokemon] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

const nameTrainer= useSelector(state=> state.nameTrainer)

const handleSutb = (e) =>{
    e.preventDefault ()
    const name =   e.target.namePokemon.value
    setNamePokemon(name)
}

const HandleChangeSelect = (e) => {
    setPokemonType(e.target.value)
}

const {lastpg, pgInBlock, pokemonsInPage} = paginationLogic(currentPage,pokemonsFilter)

const handleClickPage = (newPage) =>{
    setCurrentPage(newPage)
}

const handleNextPage = ()=> {
    const newPage = currentPage + 1
    if(newPage > lastpg){
        setCurrentPage(1)
    }else {
        setCurrentPage(newPage)
    }
}

const handlePrevPage = () =>{
    const newPage = currentPage - 1
    if(newPage < 1){
        setCurrentPage(lastpg)
    }else{
        setCurrentPage(newPage)
    }
}

const handleFpag = ()=>{
    setCurrentPage(1)
}

const handleLpag =()=>{
    setCurrentPage(lastpg)
}

useEffect(() =>{
    const URL = `https://pokeapi.co/api/v2/${pokemonType ? `type/${pokemonType}/` :"pokemon/?limit=80"}`
    axios.get(URL)
    .then(res => {
        if(pokemonType){
            const newPokemons = res.data.pokemon.map(pokemon => pokemon.pokemon)
            setPokemons(newPokemons)
        }else{
            setPokemons(res.data.results)
        }
    })
    .catch(err =>console.log(err))
},[pokemonType])

useEffect (() =>{
    const URL = "https://pokeapi.co/api/v2/type/"
    axios.get(URL)
    .then (res=> setTypes(res.data.results))
    .catch (err => console.log(err))
}, [])

useEffect (() =>{
    const newPokemons = pokemons.filter(pokemon=> pokemon.name.includes(namePokemon))
    setPokemonsFilter(newPokemons)
},[namePokemon, pokemons])

return (
    <main>
    <header className='pokedex_header'>
        <h1 className='Welcome'>Pokedex</h1>
        <p className='Welcome'> Welcome <span className='nameTrainer1'>{nameTrainer}</span>, here you can find ur favorite pokemon </p>
    <form onSubmit={handleSutb} className='pokedex_form' >
        <div className='pokemex_search'>
            <input className='pokedex_inp' type="text" id='namePokemon' />
            <button className='pokedex_btn' type='submit'>Search</button>
        </div>
        <select onChange={HandleChangeSelect} className='pokedex_select' >
            <option value="">All Pokemons</option>
        {
            types.map (type => <option value={type.name} key={type.url} >{type.name}</option> )
        }

        </select>
    </form>
    </header>
    <ListPokemons pokemons={pokemonsInPage}/>
    <ul className='pokedex_listpg'>
        <li onClick={handlePrevPage}>{"<"}</li>
        <li onClick={handleFpag}>Firts Page</li>
        {
            pgInBlock.map(pageInBlock => <li className={currentPage == pageInBlock ? "actPage" : "" } onClick= {() => handleClickPage(pageInBlock)} key={pageInBlock}>{pageInBlock}</li>)
        }
        <li onClick={handleLpag}>Last Page</li>
        <li onClick={handleNextPage}>{">"}</li>
    </ul>
    </main>
)
}

export default Pokedex
