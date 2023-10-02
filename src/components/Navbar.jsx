import React from 'react'
import logo from '../asset/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-32 py-5 w-full fixed z-50 text-white'>
            <h2 className='cursor-pointer'>ABOUT</h2>
            <h2 className='cursor-pointer'>PRODUCTS</h2>
            <img src={logo} className='w-[150px] cursor-pointer' />
            <h2 className='cursor-pointer'>RECIPES</h2>
            <button className='bg-[#FF73B5] font-bold px-2 py-1 rounded text-black'>CONTACTS US</button>
        </div>
    )
}

export default Navbar