import React from 'react';
import {CounterElement} from './CounterElement'
import example from '../../assets/Vector.png'
export const MenuElement =()=>{
    return(
        <div className='menuElement'>
            <div className='menuElementImage'> <img src={example} alt='Hamburguesa simple' className='menuImg'/></div>
            <div className='menuElementDescription'> 
             <div className='menuElementText'>
              <div>Hamburguesa simple</div>
              <div>$10.00</div>
             </div>
             <div><CounterElement /></div>
            </div>            
        </div>      
    )
}