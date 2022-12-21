import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

export const RouteProtected = () => {
    const nameTrainer=    useSelector(state => state.nameTrainer)
        if(nameTrainer){
            return(
                <>
                <Header/>
                <Outlet/>
                </>
            ) 
        }else{
            return <Navigate to= "/"/>
        }
    }
export default RouteProtected
