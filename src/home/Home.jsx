import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Inspiring from '../components/Inspiring'
import Features from '../components/Features'
import Drooling from '../components/Drooling'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Inspiring />
            <Features />
            <Drooling />
        </div>
    )
}

export default Home