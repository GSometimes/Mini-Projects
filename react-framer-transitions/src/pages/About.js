import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/Maine2.jpg'
import {motion} from 'framer-motion'
import {animationTwo, transition} from '../animations'


const About = () => {
    return (
        <motion.div initial="out" animate="in" exit="out"
        variants={animationTwo} transition={transition}>
          <Header />
          <Hero image={Image} title="Remain Paws-itive" description="To me, you're purr-fect"/>  
        </motion.div>
    )
}

export default About