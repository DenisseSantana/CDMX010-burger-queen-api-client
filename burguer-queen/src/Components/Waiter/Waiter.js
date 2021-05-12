import React, { useEffect, useState } from 'react';
import { Header } from '../elements/Header'
import { MenuElement } from './MenuElement'
import { Order } from './order';
// import {ModalPopUp} from './AlertOrder'


export const Waiter = () => {
 
    const handleNewOrder = () => {
        let clientName = prompt('Nombre del cliente');
        
        if (clientName === null || clientName == '') {
            alert('No ingresaste el nombre del cliente')
        } else {
            let numberMesa = prompt('Ingresa No. de mesa');
    
            if (numberMesa === null || numberMesa == '') {
                alert('No Ingresaste no. de mesa')
            } else {
                alert('Los datos se guardaron correctamente!')
            }
            document.getElementById('myClientName').innerHTML = clientName;
            document.getElementById('myTable').innerHTML = numberMesa;
        }
    };
    // eslint-disable-next-line no-unused-vars
    const [menu, setMenu] = useState()
    const [menuComida, setMenuComida] = useState("desayuno")
    const [order, setOrder ] = useState({
        client:'',
        time:'',
        items:[],
        status:'pendiente',
        total:0
    });

    const handleGetData = async () => {
        let url = 'http://localhost:3000/product'
        let getFetchData = await fetch(url).then(resul => resul.json())
        setMenu(getFetchData)
    }

    function changebreakfast() {
        setMenuComida("comida")
    }

    function changeFood() {
        setMenuComida("desayuno")
    }

    useEffect(() => {
        handleGetData()
    }, [])
    
    const handleAddItem = ((item)=> {
        setOrder({...order, 
            items:[...order.items, item],
            total: order.total+= parseInt(item.price)
        })
        //     // const items =order.items;
        //     // if(!items.find(p => product.name === p.name)) {
        //     //     setOrder({
        //     //         items: [...order, {name: product.name, id: product.id, price: parseInt(product.price), price: parseInt(product.price)}],
        //     //     }) 
        //     // } else if(items.find(p => product.name === p.name)) {      
        //     //    //handleUpdatePriceOrder(product.id, product.price);
        //     // }        
    });

    // FUNCIONES PARA CREAR LAS ORDENES

    // const handleUpdateNewClientOrder = e => setOrder({
    //     ...order,
    //     client: e.target.value,
    // });

    useEffect(() => {
        const handleTotal = () => {
            let value = 0;
            order.items.map((item)=> {
                value = value + (parseInt(item.price));
                return value;
            });
            setOrder({
                ...order, total: value
            });
        };
        handleTotal();
    },[]);

    const handleRemoveProductOrder = (id, price,total) => {
        console.log(id,"price", price,"total", total)
        if (price) {
            // console.log('producto eliminado');
            const newArrayItem = order.items.filter((item) =>
            item._id !== id
        )
        setOrder({...order, items: newArrayItem, total:order.total-parseInt(price)})
        }else {
            const remove = order.items.map((item) => {
                if(item._id === id) {
                    return {
                        ...item,
                        price: parseInt(price) - parseInt(total),
                    };
                }
                return item;              
            });

         setOrder({...order, 
            items: remove,
            total:order.total-parseInt(price)});
        }
    };

    // const handleRemoveProductOrder = (id, price,total) => {
    //     console.log(id,"price", price,"total", total)
    //     if (price === total) {
    //         console.log('producto eliminado');
    //         const newArrayItem = order.items.filter((item) =>
    //         item._id !== id
    //     )
    //     setOrder({...order, items: newArrayItem, total:order.total-parseInt(price)})
    //     } else {

    //         const remove = order.items.map((item) => {
    //             if(item._id === id) {
    //                 return {
    //                     ...item,
    //                     price: parseInt(price) - parseInt(total),
    //                 };
    //             }
    //             return item;              
    //         });

    //      setOrder({...order, items: remove, total:order.total-parseInt(price)});
    //     }
    // };

    // const handleUpdatePriceOrder = (id, price) => {
    //     const items = order.items;
    //     console.log(items);
    //     const updateProduct = items.map((item) => {
    //         if(item.id === id) {
    //             return {
    //                 ...item, price: parseInt(item.price) + parseInt(price), 
    //             };
    //         }else{
    //             console.log('no funciona');
    //         }
    //         return item;
    //     });
    //     setOrder({
    //         ...order,
    //         items: updateProduct,
    //      });
    // };
    

    

     
    // const handleUpdatedOrder = (parametro) => {
     
    //     callback(parametro);
        
    //     let data = {
    //         client: order.client,
    //         time: order.time,
    //         items:order.items,
    //         status:'pendiente',
    //         total:order.total,
    //     }
    //     const handlePostNewOrder = () => {
    //         let url = 'http://localhost:3000/orders';
    //         let body = JSON.stringify(data);
    //         return fetch(url, {    
    //           body,
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json'
    //           },
    //         });
    //       };
    //     handlePostNewOrder();  
    // };

    return (
        <div className='waiterView'>
            <Header />

            <div className='bottonSeccion'>
                <div className='botonComponent' onClick={handleNewOrder}>
                    <p>Nueva orden</p>
                </div>
                <div className='botonComponent'>
                    <p>Ordeness</p>
                </div>
            </div>

            <div className='typeMenu' >
                <div className='typeOfFood' id='desayuno' onClick={changeFood} >
                    <p>Desayuno</p>
                </div>
                <div className='typeOfFood' id='comida' onClick={changebreakfast}>
                    <p>Comida</p>
                </div>
            </div>

            <div id="rendermMenu" className='productMenu'>
                {menu && menu.filter(item => item.type === menuComida).map(product =>
                    <MenuElement
                        handleAddItem={handleAddItem}
                        product={product}
                        key={product._id}
                    />
                )}
            </div>

            <div className="toOrder">

                <div className='nameColumns'>
                    <h3 id='myClientName'>Cliente</h3>
                    <h3 id='myTable'>Mesa / No.</h3>
                    <h3>Orden</h3>
                </div>
                <div className="orderContainer">
                    <Order order={order} handleRemoveProductOrder={handleRemoveProductOrder} />
                </div>
                <div className='itemContenedor'>
                    <div>
                        <textarea name="textarea" rows="4" cols="45">Observaciones...</textarea>
                    </div>
                    <div className='total'order={order}>
                        <h3> Total:$ {!order.items ? '0' : order.total}</h3>
                    </div>
                </div>

                <div className='confirmButton'>
                    {/* <h3 onClick={()=>handleUpdatedOrder(order)} >Confirmar</h3> */}
                </div>

            </div>

        </div>
    )
}