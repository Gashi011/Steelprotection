import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CarouselProducts = () => {
  const slides = [
    {
      url: "https://www.hydrogeo.net/wp-content/uploads/2021/04/radcon-1-.jpg",
    },
    {
      url: "https://www.hydrogeo.net/wp-content/uploads/2021/04/radmix-1.jpg",
    },
    {
      url: "https://www.greenbuildingproducts.eu/wordpress/wp-content/uploads/BPA-Logo-KLEINe1.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  }

  // Define the text based on the currentIndex
  let carouselText;
  let link;
  if (currentIndex === 0) {
    carouselText = "Radcon #7";
    link = "/radcon";
  } else if (currentIndex === 1) {
    carouselText = "Radmyx";
    link = "/radmyx";
  } else if (currentIndex === 2) {
    carouselText = "BPA";
    link = "/bpa";
  }

  return (
    <div className="max-w-[1000px] h-[540px] w-full m-auto py-16 px-4 relative group pt-0">
        <a href={link}>
      <div id="carouselTextProducts" className="text-6xl font-bold text-white items-center text-center pb-6">
        {carouselText}
      </div>
      </a>
      <div className="pb-10">
        <a href={link}>
      <div id="saznajViseO" className="flex flex-col justify-center w-72 h-14 bg-transparent border border-white rounded-full text-2xl  text-white items-center m-auto cursor-pointer hover:text-white hover:bg-steelprotectionblue hover:scale-110">
        Saznaj više o {carouselText}
      </div>
      </a>
      </div>
      <div
        id="carouselImageProducts"
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize:"100% 100%" }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        
      >
        <a href={link} style={{ display: "block", width: "100%", height: "100%" }}>
          {/* ... (left and right arrows) */}
        </a>
        {/* Left Arrow */}
        <div className="absolute top-[360px] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white coursor cursor-pointer hover:text-steelprotectionblue ">
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        {/* Right arrow */}
        <div className="absolute top-[360px] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white coursor cursor-pointer hover:text-steelprotectionblue">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer hover:text-white">
              <RxDotFilled />
            </div>
          ))}
        </div>
    </div>
  );
};

export default CarouselProducts;
