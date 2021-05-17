/* eslint-disable react/prop-types */

import React from 'react'

export function Order(props) {
    return(
    <div className='itemOrder'>

            {props.order.items.map((item) => {
                return(

                <div key={item._id} >{item.name}</div>
                )
            })}
    </div>

    )
    

}