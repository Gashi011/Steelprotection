import React, { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set the isClient state to true when the component mounts on the client-side
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (!isClient) {
    // If the component is not yet mounted on the client-side (during server-side rendering), return null
    return null;
  }

  return (
    <div className="lg:hidden">
      {/* Use a div instead of a button for the container */}
      <div onClick={handleToggle} className="text-black focus:outline-none">
        {isOpen ? (
          // Custom icon for the open state
          <FaTimes className="w-6 h-6 text-neutral-700" />
        ) : (
          // Custom icon for the closed state (using IoMenuSharp icon)
          <IoMenuSharp className="w-6 h-6" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2 absolute right-10 flex flex-col gap-10 text-xl">
          <Link href="/about">
            About
          </Link>
          <div style={{ outline: "none" }}>Home</div>
          <div style={{ outline: "none" }}>Contact</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
