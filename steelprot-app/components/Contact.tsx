import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 ps-4">
    <div className="flex flex-col lg:flex-col lg:justify-start gap-5 lg:gap-5">
      <div className="w-2/3 mx-auto lg:w-96 h-20 pt-4 bg-neutral-50 flex flex-col items-center shadow-inner gap-2">
        <p className="text-black text-lg font-bold"><BsTelephone/></p>
        <p className="text-black text-lg font-bold">+381 63 111 1111</p>
      </div>
      <div className="w-2/3 mx-auto lg:w-96 h-20 pt-4 bg-neutral-50 flex flex-col items-center shadow-inner gap-2">
        <p className="text-black text-lg font-bold"><FaLocationDot/></p>
        <p className="text-black text-lg font-bold">Ulica Glave Vujadina 26</p>
      </div>
      <div className="w-2/3 mx-auto lg:w-96 h-20 pt-4 bg-neutral-50 flex flex-col items-center shadow-inner gap-2">
        <p className="text-black text-lg font-bold"><FaClock/></p>
        <p className="text-black text-lg font-bold">Pon - Pet: 8 - 16 sati</p>
      </div>
    </div>
    <div className="w-2/3 mx-auto lg:w-1/2 h-72 bg-neutral-50 flex justify-center items-center shadow-inner lg:self-start">
        <p className="text-black text-lg font-bold">This is the fourth box</p>
      </div>
    </div>
  );
};

export default Contact;
