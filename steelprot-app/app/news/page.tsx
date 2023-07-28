import BackgroundImage from "@/components/BackgroundImageNaslovna";
import Novosti from "@/components/Novosti";
import React from "react";

const News = () => {
  return (
    <div>
      <BackgroundImage>
        <div className="flex flex-col justify-center pt-40 xl:pt-52  gap-20 text-black">
          <div className=" flex flex-row">
            <Novosti />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti />
          </div>
        </div>
      </BackgroundImage>

      {/* Ako se dodaje jos news */}
      {/* <div className="lg:hidden">
        <BackgroundImage>
          
        </BackgroundImage>
      </div> */}
        <div className="lg:hidden">
        <BackgroundImage>
          
        </BackgroundImage>
      </div> 
        <BackgroundImage>
        <div className="flex flex-col justify-center pt-40 xl:pt-42  gap-20 text-black">
          <div className=" flex flex-row">
            <Novosti />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti />
          </div>
        </div>
        </BackgroundImage>
        <div className="lg:hidden">
        <BackgroundImage>
          
        </BackgroundImage>
      </div> 
      </div>
    
  );
};

export default News;
