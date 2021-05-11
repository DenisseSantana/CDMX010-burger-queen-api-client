/* eslint-disable react/prop-types */
import React from 'react';
import { CounterElement } from '../elements/CounterElement'
// import example from '../../assets/Vector.png'

export const MenuElement = ({product, handleAddItem}) => {
    // console.log(product)
    return (
        <div className='menuElement' onClick={()=>handleAddItem(product)}> 
            <div className='menuElementImage'> <img className='menuImg' src={product.image} alt={product.name} /></div>
                <div className='menuElementDescription'> 
                    <div className='menuElementText'>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </div>
                <div><CounterElement /></div>
            </div>       
        </div>  
    )
}