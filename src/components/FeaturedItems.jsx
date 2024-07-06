import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function FeaturedItems() {
    const [featuredItems, setFeaturedItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=4');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const products = await response.json();
            setFeaturedItems(products);
        }
        fetchData();
    }, [])

    return (
        <div className='flex flex-col w-screen overflow-hidden justify-center items-center pb-20'>
            <div className='lg:py-8 py-4'>
                <h1 className='font-bold lg:text-3xl text-lg'>Trending Products</h1>
            </div>
            <div className='flex flex-wrap pl-3.5 justify-around items-start flex-grow '>
                {
                    (featuredItems.length !== 0) ?
                        (featuredItems.map((item) => {
                            return <div className='border-slate-300 relative border-2 p-5 xl:w-80 sm:w-1/3 w-3/5 mr-4 flex flex-col flex-wrap justify-around items-center h-full' key={item.id}>
                                <div >
                                    {/* while hovering this image  */}
                                    <img className='lg:max-h-64 max-h-52' src={item.image} alt="product image" />
                                </div>
                                <div className='absolute top-1 left-1'>
                                    <p className='p-1 bg-purple-400 font-semibold text-sm rounded-lg'>${item.price}</p>
                                </div>

                                {/* tooltip here cant be hidden and flex at the same time */}
                                {/* <div className=' absolute hidden top-1/4 left-1/4 rounded-xl p-5 z-30 bg-purple-200 w-full flex flex-col justify-between text-center'>
                                    <p className='font-semibold text-xl'>Description</p>
                                    <p className='font-serif'>{item.description}</p>
                                </div> */}

                                <div className='p-4'>
                                    <p className='font-semibold not-italic text-sm lg:text-lg'>{item.title}</p>

                                </div>
                            </div>
                        }))
                        : (<div>Loading...</div>)
                }

            </div>
            <Link to='shop'><button className='flex p-4 mt-4 bg-purple-300 font-bold rounded-xl'>Visit our Shop</button> </Link>

        </div>
    )
}
