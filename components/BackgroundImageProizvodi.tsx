interface BackgroundImageProps {
    children: React.ReactNode;
  }
  
  import React from "react";
  
  const BackgroundImageProizvodi: React.FC<BackgroundImageProps> = ({ children }) => {
    return (
      <div
        className="flex flex-col justify-start items-center h-[1500px] xl:h-[1250px] sm:w-full bg-cover text-center text-blue-400 z-40"
        style={{ backgroundImage: "url('/images/background2.jpg')" }}
      >
        {children}
      </div>
    );
  };
  
  export default BackgroundImageProizvodi;
  