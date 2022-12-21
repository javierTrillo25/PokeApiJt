import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/Header.css"

const Header = () => {
    const dispatch = useDispatch()

    const handleClickLout = ()=>{
        dispatch(setNameTrainerGlobal(""))
    }

    return (
<header className='header'>
        <img className='header_i' src="/images/pokedex.png" alt="" />
        <div className='header_black'></div>
        <div className='header_cicle'>
            <div className='header_cicle_int'></div>
            
        </div>
        <i onClick={handleClickLout} className='header_Lout bx bx-log-out-circle' ></i>
    </header>
    )
}

export default Header
