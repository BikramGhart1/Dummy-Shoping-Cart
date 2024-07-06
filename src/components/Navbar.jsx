import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext.jsx'

export default function Navbar() {
    const { totalQuantity } = useContext(CartContext);
    return (
        <div className=' flex flex-row fixed top-0 z-50 w-screen justify-around items-center h-20  bg-stone-300 text-black text-sm md:text-xl'>
            <div>
                <Link to='/'><button>DummyShop</button></Link>
            </div>
            <div className='flex flex-row justify-between items-center w-56'>
                <Link to='shop'><button>Shop</button></Link>
                <Link to='cart'><button className='relative pr-10'>Cart</button></Link>


            </div>

        </div>
    )
}
