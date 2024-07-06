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
                {/* <Link to='about'><button>About</button></Link> */}
                <Link to='shop'><button>Shop</button></Link>
                <Link to='cart'><button className='relative pr-10'>Cart <em className='not-italic absolute top-0 right-0 -mt-2 mr-6 lg:-mt-4 lg:mr-3 p-1 lg:w-8 w-6 rounded-2xl bg-purple-400 bg-opacity-50 text-xs lg:text-lg'>{totalQuantity}</em> </button></Link>


            </div>
            {/* <div>
            </div> */}
        </div>
    )
}
