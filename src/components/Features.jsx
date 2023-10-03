import React from 'react'

const Features = () => {
    return (
        <>
            <div className=' h-screen w-full flex flex-col justify-around items-center' >
                <h1 className='text-center font-bold text-5xl uppercase'>Features & <br />Benefits</h1>
                <div className='flex items-center justify-around text-center px-20 gap-5 '>
                    <div className='flex items-center justify-center flex-col'>
                        <img width={120} className='pb-9' src='https://eat-curious.com/wp-content/uploads/2022/12/home-9.png' />
                        <h2 className='font-bold text-xl'>PLANT BASED</h2>
                        <p>Plant-protein yumminess, suitable for everyone.</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img width={120} className='pb-9' src='https://eat-curious.com/wp-content/uploads/2022/12/home-11.png' />
                        <h2 className='font-bold text-xl'>PLANT BASED</h2>
                        <p>If we don’t know exactly what an ingredient is, we don’t include it.</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img width={120} className='pb-9' src='https://eat-curious.com/wp-content/uploads/2022/12/home-12.png' />
                        <h2 className='font-bold text-xl'>PLANT BASED</h2>
                        <p>It’s not meat. No really, it’s not!</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img width={120} className='pb-9' src='https://eat-curious.com/wp-content/uploads/2022/12/home-10.png' />
                        <h2 className='font-bold text-xl'>PLANT BASED</h2>
                        <p>Foodies unite, because here flavour rules.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features