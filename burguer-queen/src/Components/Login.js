import React from 'react';
import {AccessForm} from './elements/AccessForm'
///
///Just as an example
import {MenuElement} from './elements/MenuElement'
///
import LogoBur from '../assets/LogoBur.png'

export const Login =()=>{
    return(
        <div className='myLogin'>
         <img src={LogoBur} alt='Burguer Queen' className='logo'/>
         <AccessForm />
         <MenuElement />
        </div>
    )
}