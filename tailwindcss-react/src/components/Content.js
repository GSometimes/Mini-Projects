import React from "react";
import ImageOne from "../images/wine.jpg";
import ImageTwo from "../images/wine2.jpg";
import ImageThree from "../images/wine3.jpg";

const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-evenly md:gap-7 p-4">
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1622091767/Portfolio1/wine_ibselg.webp"
          alt=""
          className="h-full rounded mb-10 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2 md:text-3xl">Pinot Noir</h2>
          <p className="mb-2">Cherry, Plum, Chocolate</p>
          <span>$27</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageTwo} alt="" className="h-full rounded mb-10 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Moscato</h2>
          <p className="mb-2">Apple, Peach</p>
          <span>$38</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageThree} alt="" className="h-full rounded mb-10 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Chianti</h2>
          <p className="mb-2">Berry, Floral, Heather</p>
          <span>$35</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
