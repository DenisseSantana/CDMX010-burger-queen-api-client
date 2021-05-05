import React, {useEffect, useState} from 'react';
import {Header} from '../elements/Header'
import {MenuElement} from './MenuElement'



export const Waiter =()=>{
    // eslint-disable-next-line no-unused-vars
    const [menu, setMenu]=useState()

    const handleGetData=async()=>{
        let url ='http://localhost:3000/product'
        let getFetchData = await fetch(url).then(resul=>resul.json())
        setMenu(getFetchData)
    }
  
    useEffect(()=>{
        handleGetData()
    },[]) 

    return(
        <div className='waiterView'>
            <Header/>
            <div className='bottonSeccion'>
                <div className='botonComponent'>
                    <p>Nueva orden</p>
                </div>
                <div className='botonComponent'>
                    <p>Ordeness</p>
                </div>
            </div>
      
                <div className='typeMenu'>
                    <div className='typeOfFood' id='desayuno' >
                        <p>Desayuno</p>
                    </div>
                    <div className='typeOfFood' id='comida'>
                        <p>Comida</p>
                    </div>
                </div>
                <div className='productMenu'>
                    {menu&&menu.map(product => 
                        <MenuElement 
                            product={product} 
                            key={product._id}
                        />
                    )}
                </div>              
           
           <div className="toOrder">
                <div className='nameColumns'>
                    <h3>Cliente</h3>
                    <h3>Mesa / No.</h3>
                    <h3>Orden</h3>
                </div>
                <div className='itemOrder'>
                    <div className='item'>
                        <img className='trash' src ='https://firebasestorage.googleapis.com/v0/b/burgerqueen-21918.appspot.com/o/trash.png?alt=media&token=52619b12-0fd2-487e-8609-e72e5033a0f6' />
                        <h3>Nombre del producto</h3>
                        <h3>2x</h3>
                        <h3>$10</h3>
                    </div>
                </div>
                <div className='itemContenedor'>
                    <div>
                        <textarea name="textarea" rows="4" cols="45">Observaciones...</textarea>
                    </div>
                    <div className='total'>
                        <h3>Total = $10</h3>
                    </div>
                    
                    
                </div>
                <div className='confirmButton'>
                        <h3>Confirmar</h3>
                    </div>
                
            </div>           
        </div>
        )
} 