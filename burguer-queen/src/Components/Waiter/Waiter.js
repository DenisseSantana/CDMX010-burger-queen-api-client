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
            <h1>Esta es  la pagina del mesero</h1>
           {menu&&menu.map(product => 
                <MenuElement product={product} key={product._id}/>
            )}
        </div>
    )
}