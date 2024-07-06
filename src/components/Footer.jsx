import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-row justify-around  items-end mt-4 border-t py-6 bg-slate-100 text-slate-800'>
            <div className='flex flex-col text-sm lg:text-xl'>
                <h1 className='font-bold -ml-4 md:text-xl text-xl text-slate-900'>Contact</h1>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="https://github.com/BikramGhart1">Github</a>
                <a href="#">Linkdeln</a>
            </div>
            <div>
                <p>@ 2024 . All Rights Reserved</p>
            </div>
        </div>
    )
}
