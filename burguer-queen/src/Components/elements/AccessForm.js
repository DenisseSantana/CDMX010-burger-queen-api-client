import React from 'react';

export const AccessForm =()=>{
    return(
        <form className='myForm'>
            <input type="text" id="username" name="username" placeholder='Usuario'/><br/><br/>
            <input type="password" id="password" name="password" placeholder='Contraseña'/><br/><br/>
            <input type="submit" value="Ingresar"/> 
        </form>      
    )
}
