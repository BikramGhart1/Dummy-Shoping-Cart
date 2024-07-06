import React, { useEffect, useState } from 'react'
import FeaturedItems from './FeaturedItems';
import { Link } from 'react-router-dom';

export default function Home() {
    const [homePageItem, setHomePageItem] = useState(null);
    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch('https://fakestoreapi.com/products/15');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const item = await response.json();
            setHomePageItem(item);
        }
        fetchItem();
    }, [])

    return (
        <div className='mt-12 flex-grow  overflow-hidden'>
            <div className='flex flex-row lg:justify-around justify-center items-center pt-10'>
                <div className=' lg:text-4xl md:text-3xl text-xl pl-3.5 w-4/5 bg-slate-50 lg:py-20 py-7 xl:pl-60'>
                    <div className='font-bold lg:pb-10 pb-5'>Discover your new favorite
                        <em className='not-italic text-purple-900'> outfit </em>
                        today!</div>
                    <div className='md:text-xl lg:text-2xl text-sm'>Where fashion meets affordability.</div>

                    <div className='flex flex-col justify-center items-center pt-6 lg:text-2xl text-sm'>

                        <Link to='shop'><button className='p-3 rounded-lg bg-purple-300 '>Shop</button></Link>
                    </div>
                </div>
                <div className='lg:w-1/3 w-2/5 bg-slate-50 lg:min-h-96 flex justify-center items-center'>
                    {homePageItem ?
                        <img className='lg:p-8 p-2 max-h-96 opacity-95' src={homePageItem.image} alt={homePageItem ? homePageItem.title : 'Product image'} />
                        :
                        <div className='text-center text-2xl'>Loading....</div>

                    }
                </div>
            </div>
            <FeaturedItems />

        </div>



    )
}
