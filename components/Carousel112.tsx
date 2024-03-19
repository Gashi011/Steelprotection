import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel112 = () => {
  const slides = [
    {
      url: "/images/projekti/akzpp/projekat112/1.jpg",
    },
    {
      url: "/images/projekti/akzpp/projekat112/2.jpg",
    },
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

  return (
    <div className="max-w-[1080px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize:"100% 100%"  }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white coursor cursor-pointer hover:text-steelprotectionblue ">
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        {/* Right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white coursor cursor-pointer hover:text-steelprotectionblue">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer hover:text-steelprotectionblue">
              <RxDotFilled />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Carousel112;
