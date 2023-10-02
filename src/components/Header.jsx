import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-screen bg-[#042F1A] flex items-center justify-center relative'>
            <img className=' absolute top-28 right-[46%]' src='https://eat-curious.com/wp-content/themes/eat-curious/img/squiggle1.svg' />
            <h1 className='text-[140px] uppercase text-white font-black whitespace-nowrap absolute top-[15%]'>Meat-Free</h1>
            <img className='h-[40%] absolute top-' src='https://eat-curious.com/wp-content/uploads/2023/07/Afro-Fusion-Spice-Bowl-1024x1024.png' />
            <h1 className='text-[140px] uppercase text-white font-black whitespace-nowrap absolute bottom-20'>YOur Mind</h1>
        </div>
    )
}

export default Header