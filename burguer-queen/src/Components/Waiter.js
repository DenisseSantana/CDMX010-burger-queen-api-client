import React from 'react';
import {Header} from './elements/Header';
import {MenuElement} from './elements/MenuElement'

export const Waiter =()=>{
    return(
        <div className='mainLogin'>
         <Header />
         <h1>Esta es  la pagina del mesero</h1>         
         <MenuElement />
        </div>
    )
}