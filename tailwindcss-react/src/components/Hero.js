import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl text-5xl font-black mb-14">
                ON CLOUD WINE
            </h1>
            <Link className="py-6 px-10 bg-red-800 rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-red-600 transition duration-300 ease-in-out flex items-center animate-bounce font-black" to="/menu">
            Wine Menu</Link>            
        </div>   
    )
}

export default Hero
