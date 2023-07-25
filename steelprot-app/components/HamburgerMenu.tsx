import Link from "next/link";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={handleToggle}
        className="text-black  focus:outline-none"
      >
        {isOpen ? (
          // Custom icon for the open state
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0  24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Custom icon for the closed state (using your IoMenuSharp icon)
          <IoMenuSharp className="w-10 h-10 text-neutral-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 absolute right-10 flex flex-col gap-10 text-xl">
          <a href="#" className="text-neutral-500 py-2"><Link href="/about"> About</Link></a>
          <a href="#" className="text-neutral-500 py-2">Home</a>
          <a href="#" className="text-neutral-500 py-2">Contact</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
