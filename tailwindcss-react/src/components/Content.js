import React from 'react'
import ImageOne from '../images/egg.jpg'
import ImageTwo from '../images/egg2.jpg'
import ImageThree from '../images/egg3.jpg'

const Content = () => {
    return (
        <>
        <div className="menu-card"> 
            <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg Muffins</h2>
                <p className="mb-2">Crispy, Delicious, and Nutritious</p>
                <span>$16</span>
            </div>
        </div>
        <div className="menu-card"> 
            <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg Salad</h2>
                <p className="mb-2">Fresh, Refreshing, and Nutritious</p>
                <span>$14</span>
            </div>
        </div>
        <div className="menu-card"> 
            <img src={ImageThree} alt="" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg-streme Sandwich</h2>
                <p className="mb-2">Hearty, Juicy,  Eggcelent</p>
                <span>$18</span>
            </div>
        </div>
        </>
    )
}

export default Content
