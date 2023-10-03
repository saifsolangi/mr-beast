import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Inspiring from '../components/Inspiring'
import Features from '../components/Features'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Inspiring />
            <Features />
        </div>
    )
}

export default Home