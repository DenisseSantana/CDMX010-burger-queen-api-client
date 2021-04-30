import React from 'react';
import { Link } from 'react-router-dom';

export const AccessForm =()=>{
    return(
        <form className='myForm'>
            <input type="text" id="username" name="username" placeholder='Usuario'/><br/><br/>
            <input type="password" id="password" name="password" placeholder='Contraseña'/><br/><br/>
            <Link to= '/waiter'>
            <input type="submit" value="Ingresar"/> 
            </Link>
        </form>      
    )
}
