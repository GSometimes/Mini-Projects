import React, {useState} from 'react'
import {SliderData} from "./SliderData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Fade from 'react-reveal/Fade';



const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }



    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div>
                        <Fade top>
                            {index === current && (<img src={slide.image} alt="gambit" className="image" />)}
                        </Fade>
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
