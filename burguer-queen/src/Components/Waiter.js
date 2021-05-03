import React from 'react';
import { Boton } from './elements/Boton';
import {Header} from './elements/Header'

export const Waiter =()=>{
    return(
        <div className='waiterView'>
            <Header/>
            <Boton/>
            <h1>Esta es  la pagina del mesero</h1>
        </div>
    )
}