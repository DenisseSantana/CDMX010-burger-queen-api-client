import React from 'react';
import BurguerText from '../../assets/logoDos.png'

export const AlertOrder = () => {

    return (
    <div className='myAlertClient'>
        <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
        <img src={BurguerText} alt='Burguer Queen Text' className='logoText'/>
        <input id='cliente' className='inputAlert' placeholder='Nombre del cliente'></input>
        <input id='mesa' className='inputAlert' placeholder='No.de mesa'></input>
        <button className='confirmButton'>Continuar</button>
    </div>
    )
}