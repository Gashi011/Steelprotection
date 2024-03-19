interface BackgroundImageProps {
  children: React.ReactNode;
}

import React from "react";

const BackgroundImageNaslovna: React.FC<BackgroundImageProps> = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-start items-center h-[1500px] xl:h-[1250px] sm:w-full bg-cover text-center text-blue-400 z-40"
      style={{ backgroundImage: "url('/images/1.jpg')" }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageNaslovna;
