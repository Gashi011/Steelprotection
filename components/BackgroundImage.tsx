interface BackgroundImageProps {
    children: React.ReactNode;
}

import React from "react";

const BackgroundImage: React.FC<BackgroundImageProps>= ({children}) => {
  return (
    <div
      className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-2 md:gap-0 top-10 mt-10 xl:mt-32 h-[700px] sm:w-full bg-cover"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
        {children}
    </div>
  );
};

export default BackgroundImage;
