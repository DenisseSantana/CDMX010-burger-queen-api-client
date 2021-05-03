import React from 'react';
import {AccessForm} from './elements/AccessForm'
import LogoBur from '../assets/LogoBur.png'

export const Login =()=>{
    return(
        <div className='myLogin'>
         <img src={LogoBur} alt='Burguer Queen' className='logo'/>
            <AccessForm />
        </div>
    )
}