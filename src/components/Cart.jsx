import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
export default function Cart() {
    const { cartItems, removeItem } = useContext(CartContext);
    const realTotal = cartItems.reduce((sum, item) => sum + (item.qty * item.price), 0);
    const onRemove = (id) => {
        removeItem(id);
    }
    return (
        <div className='flex-grow mt-20 overflow-hidden'>
            <div className='flex justify-center items-center py-5 font-semibold md:text-2xl text-md'>
                <p>Items in your Cart</p>
            </div>
            {

                (cartItems.length !== 0) ? (
                    <div className='flex lg:flex-row flex-col justify-items-start'>
                        <div className='flex flex-col justify-start lg:pl-32 pl-3.5  lg:w-3/5 w-full'>
                            {
                                cartItems.map((item) => {
                                    return <div className=' relative flex flex-row justify-items-start  w-full pb-1 md:my-4 my-2 text-sm md:text-lg lg:text-xl items-start  border-b border-b-slate-300' key={item.id}>
                                        <div className='p-1 w-3/4'>
                                            <img className='max-h-32  mr-2' src={item.image} alt="cart items" />
                                        </div>
                                        <div className='px-4 w-full'>
                                            <p className='pb-1  text-sm text-left font-semibold'>{item.title}</p>
                                            <button onClick={() => { onRemove(item.id) }} className='bg-red-300 p-2 rounded-lg'>Remove</button>
                                        </div>
                                        <div className='flex flex-col md:pl-5 pl-1 justify-between w-full' >
                                            <div className=' font-mono md:text-lg text-sm'>Price: ${item.price}</div>
                                            <div className=''>quantity: {item.qty}</div>

                                            <div className='font-mono'>Total: ${(item.qty * item.price).toFixed(3)}</div>

                                        </div>

                                    </div>
                                })
                            }

                        </div>
                        <div className='mr-10 flex flex-col px-5  pb-4 ml-20 h-64 justify-start lg:items-start items-center '>
                            <div className='flex flex-col py-5'>
                                <p className='pt-2 font-semibold text-center lg:text-start'>Transaction Receipt </p>
                                <p className='pt-4 font-mono md:text-xl text-sm w-full'>Total Price: ${realTotal.toFixed(2)}</p>
                            </div>
                            <div className='md:py-4 py-2'>
                                <Link to='/shop'><button className='p-2 bg-purple-700 font-semibold rounded-xl  text-white'>Continue Shopping</button></Link>
                            </div>
                            <div className='md:pt-4 pt-2'>
                                <button className='bg-green-700 p-2 text-white font-semibold text-sm md:text-xl rounded-xl' onClick={() => { alert('Thanks for shopping') }}>PROCEED</button>
                            </div>

                        </div>

                    </div>


                ) : (
                    <div className='flex flex-col justify-center items-center'>
                        <p className='py-6'>Your Cart is Empty</p>
                        <Link to='/shop'><button className='p-2 bg-purple-700 font-semibold rounded-xl text-white'>Continue Shopping</button></Link>

                    </div>
                )

            }
        </div>
    )
}
