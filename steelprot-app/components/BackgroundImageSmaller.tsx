interface BackgroundImageProps {
    children: React.ReactNode;
}

import React from "react";

const BackgroundImageSmaller: React.FC<BackgroundImageProps>= ({children}) => {
  return (
    <div
      className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-2 md:gap-0 h-[600px] sm:w-full bg-cover"
      style={{ backgroundImage: "url('/images/background2.jpg')" }}
    >
        {children}
    </div>
  );
};

export default BackgroundImageSmaller;