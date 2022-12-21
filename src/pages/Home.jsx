import React from 'react'
import { FormHome } from '../components/FormHome'
import "./styles/Home.css"


const Home = () => {
    return (
    <main className='home'>
    <img className='home_i' src="/images/pokedex.png" alt="" />
    <h2 className='home_sub'>Hi, Trainer!</h2>
    <p className='home_text'>Give me your name to Start!</p>
        <FormHome/>
    </main>
    )
}

export default Home
