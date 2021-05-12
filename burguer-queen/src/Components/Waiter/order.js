/* eslint-disable react/prop-types */

import React from 'react'

export function Order(props) {
    return(
    <div className='itemOrder'>

            {props.order.items.map((item) => {
                return(
                    <div className='itemOrder' key={item._id}>
                    <div className='item'>
                        <img className='trash' src ='https://firebasestorage.googleapis.com/v0/b/burgerqueen-21918.appspot.com/o/trash.png?alt=media&token=52619b12-0fd2-487e-8609-e72e5033a0f6'  onClick={()=>props.handleRemoveProductOrder(item._id, item.price, props.order.total)} />
                        <h3 className='textOrder'>{item.name}</h3>
                        <h3 className='textOrder'></h3>
                        <h3 className='textOrder'>{item.price}</h3>
                    </div>
                </div>
                )
            })}
    </div>

    )
    

}