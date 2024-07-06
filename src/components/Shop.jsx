import React, { useContext, useState } from 'react'

//this is defactored context from CartContext.jsx which we are going to consume
import { CartContext } from '../contexts/CartContext.jsx'
import PopUp from './PopUp.jsx';

export default function Shop() {
    const [quantities, setQuantities] = useState({});
    const [showPopUp, setPopUp] = useState(false);
    //Using useContext() hook to consume the prop
    const { allItems, addToCartHandler } = useContext(CartContext);

    const quantityChangeHandler = (id, quantity) => {
        //object of quantity and their ids
        setQuantities((prev) => ({ ...prev, [id]: quantity }));
    }
    const handleAddToCart = (id) => {
        //if no quantity default value to 0
        const quantity = quantities[id] || 1;
        // alert(`${quantity} items added to the cart`);
        addToCartHandler(id, quantity);
        console.log('Add to Cart clicked!');
        //reset the quantity
        setQuantities((prev) => ({ ...prev, [id]: 0 }))
        setPopUp(true);
        setTimeout(() => {
            setPopUp(false);
        }, 6000)

    }
    const hidePopUp = () => {
        setPopUp(false);
    }
    return (
        <div className=' flex flex-row flex-grow overflow-hidden justify-center items-start pt-10 md:mt-20 mt-24 relative'>

            <div className='flex md:flex-col flex-row md:justify-center justify-between md:items-start lg:w-3/5     md:w-11/12  lg:px-16 px-3.5 fixed md:top-36 top-20 z-20 left-0 bg-slate-200 md:bg-transparent w-full'>

                <p className='md:block hidden pb-4 font-bold md:text-xl text-sm'>Categories:</p>

                <div className=' flex md:flex-col flex-row md:w-1/4 lg:w-2/5 xl:w-3/12 w-full justify-between md:items-start items-end pl-1 md:border-r-4 lg:pr-4 pr-2 text-sm border-slate-300 md:text-lg font-semibold md:font-normal'>

                    <a href="#women" className='md:pb-2'><button>Women's clothing</button></a>
                    <a href="#men" className='md:pb-2'><button>Men's Clothing</button></a>
                    <a href="#jewellery"><button>Jewellery</button></a>

                </div>

            </div>
            {(allItems.length !== 0) ? (<div className='md:pr-10 pr-2 md:pl-72 flex flex-wrap md:flex-col justify-center pl-2 flex-1 '>
                <PopUp showPopUp={showPopUp} hidePopUp={hidePopUp} />
                <div className='pb-0' id='women'>
                    <p className='font-semibold md:text-2xl text-lg text-center pb-4 w-full '>Women's Clothing</p>
                    <div className='section '>
                        {
                            allItems.map((item) => (
                                (item.category === "women's clothing") && (
                                    <div className='card' key={item.id}>
                                        <img className='md:max-h-72 max-h-52' src={item.image} alt="men's clothing" />
                                        <p className='py-2'>{item.title}</p>
                                        <p className='badge'>${item.price}</p>

                                        <p className='pb-3'>
                                            Qty: <input className='outline-none p-2' min='0' type="number" value={quantities[item.id] || ''} onChange={(e) => quantityChangeHandler(item.id, parseInt(e.target.value))} placeholder='Enter quantity here' />
                                        </p>

                                        <button onClick={() => { handleAddToCart(item.id) }} className='md:p-4 p-2 bg-purple-400 rounded-xl'>Add to Cart</button>
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
                <div className='py-8' id='men'>
                    <p className='font-semibold md:text-2xl text-lg text-center pb-4 w-full py-4'>Men's clothing</p>
                    <div className='section'>
                        {
                            allItems.map((item) => (
                                (item.category === "men's clothing") && (
                                    <div className='card' key={item.id}>
                                        <img className='md:max-h-72 max-h-52' src={item.image} alt="men's clothing" />
                                        <p className='py-4'>{item.title}</p>
                                        <p className='badge'>{item.price}</p>

                                        <p className='pb-3'>
                                            Qty: <input className='outline-none p-2' min='0' type="number" value={quantities[item.id] || ''} onChange={(e) => quantityChangeHandler(item.id, parseInt(e.target.value))} placeholder='Enter quantity here' />
                                        </p>

                                        <button onClick={() => { handleAddToCart(item.id) }} className='p-4 bg-purple-400 rounded-xl'>Add to Cart</button>
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
                <div className='' id='jewellery'>
                    <p className='font-semibold md:text-2xl text-lg text-center pb-4 w-full py-4'>Jewellery</p>
                    <div className='section'>
                        {
                            allItems.map((item) => (
                                (item.category === "jewelery") && (
                                    <div key={item.id} className='card'>
                                        <img className='md:max-h-72 max-h-52 ' src={item.image} alt="jewellery" />
                                        <p className='py-4'>{item.title}</p>
                                        <p className='badge'>{item.price}</p>

                                        <p className='pb-3'>
                                            Qty: <input className='outline-none p-2' min='0' type="number" value={quantities[item.id] || ''} onChange={(e) => quantityChangeHandler(item.id, parseInt(e.target.value))} placeholder='Enter quantity here' />
                                        </p>

                                        <button onClick={() => { handleAddToCart(item.id) }} className='p-4 bg-purple-400 rounded-xl'>Add to Cart</button>
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>) : (
                <div>Loading....</div>
            )
            }

        </div>
    )
}
