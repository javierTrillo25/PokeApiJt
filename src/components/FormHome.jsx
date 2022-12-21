import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./Style/FormHome.css"

export const FormHome = () => {

    const dispatch = useDispatch()

    const handleSubmit =(e) =>{
        e.preventDefault()
        const nameTrainer= e.target.nameTrainer.value.trim()
        dispatch(setNameTrainerGlobal(nameTrainer))
    }
    return (
        <form className='home_form' onSubmit={handleSubmit}>
        <input required className='home_input' type="text" id='nameTrainer' placeholder='Your name is...'/>
        <button className='home_btn'>Start!</button>
    </form>
    )
}
