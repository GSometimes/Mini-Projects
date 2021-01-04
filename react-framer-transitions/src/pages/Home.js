import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/Maine1.jpg'
import { motion } from 'framer-motion'
import {animationOne, transition} from '../animations'


const Home = () => {
    return (
        <motion.div 
        initial="out" 
        animate="in" 
        exit="out" 
        variants={animationOne} 
        transition={transition}
        >
          <Header />
          <Hero image={Image} title="It's Frickin' Cats" description="How claw-some is that?"/>  
        </motion.div>
    )
}

export default Home