import React, { useState } from "react";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
          <IoMenuSharp />
        </span>
      </div>

      <ul className={`md:flex md:items-center ${menuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"} md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}>
        <li className="mx-4 my-6 md:my-0">
          <a href="/" className="text-xl hover:text-cyan-500 duration-500">Naslovna</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/about" className="text-xl hover:text-cyan-500 duration-500">O nama</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/products" className="text-xl hover:text-cyan-500 duration-500">Proizvodi</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/projects" className="text-xl hover:text-cyan-500 duration-500">Projekti</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/news" className="text-xl hover:text-cyan-500 duration-500">Novosti</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/contact" className="text-xl hover:text-cyan-500 duration-500">Kontakt</a>
        </li>

        <h2 className=""></h2>
      </ul>
    </nav>
  );
};

export default Navbar;
