/* eslint-disable react/prop-types */
import React from 'react';
import { CounterElement } from '../elements/CounterElement'
// import example from '../../assets/Vector.png'

export const MenuElement = ({product}) => {
    // console.log(product)
    return (
        <div className='menuElement'>
            <div className='menuElementImage'> <img src={product.image} alt={product.name} className='menuImg'/></div>
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