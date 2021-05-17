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
                </div>
                <div className='itemOrder'>
                    <div className='item'>
                    </div>
                </div>
                <div className='total'>
                </div>
                <div className='confirmOrder'>
                    <div>
                        <textarea name="textarea" rows="10" cols="20">Observaciones...</textarea>
                    </div>
                    <div className='confirmButton'>
                        
                    </div>
                </div>
            </div>           
        </div>
        )
} 