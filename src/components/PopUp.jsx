import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

export default function PopUp({ showPopUp, hidePopUp }) {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className={`${showPopUp ? 'flex' : 'hidden'} bg-purple-gradient opacity-80 text-white rounded-sm fixed md:top-24 md:right-10 right-2 top-24 z-50 p-4 flex-col justify-end items-end`}>
            <div className='' onClick={hidePopUp}>
                <button className=' px-1 pl-1 bg-white text-red-800 font-bold rounded-2xl w-6 '>X</button>
            </div>
            <div className='p-4 font-bold'>
                <p>{`${totalQuantity} items added to the Cart`}</p>
            </div>
            <div className='p-4 mr-14'>
                <Link to='/cart'><button className='font-semibold bg-green-900 p-2 rounded-xl'>Go to Cart</button></Link>
            </div>
        </div>
    )
}
