import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/Maine3.jpg'
import {motion} from 'framer-motion'
import {animationThree, transition} from '../animations'


const Services = () => {
    return (
        <motion.div initial="out" animate="end" exit="out"
        variants={animationThree} transition={transition}>
          <Header />
          <Hero image={Image} title="Experience Cats" description="Living in a gangsta’s purr-adise"/>  
        </motion.div>
    )
}

export default Services