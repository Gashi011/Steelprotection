"use client";

import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div id="navbar" className="fixed w-full max-h-32 bg-white  shadow-md z-50">
      <div className="p-6 border-b-2">
        <Container>
          <div className="flex flex-row  justify-between items-center gap-2 md:gap-0 xl:px-14 md:px-10  px-5">
            <Logo />

            <div></div>
            <div></div>
            <div className="hidden lg:block text-xl lg:text-2xl font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/">Naslovna</a>
            </div>
            <div className="hidden lg:block text-xl lg:text-2xl font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/about">O nama</a>
            </div>
            {/* <div className="hidden lg:block text-xl lg:text-2xl font-bold hover:text-neutral-500 cursor-pointer">
              <div>
                <a href="/products">
                <div className="hidden lg:block text-xl lg:text-2xl font-bold hover:text-neutral-500 cursor-pointer">
                  Proizvodi
                </div>
                </a>
              </div>
            </div> */}
            <div className="hidden lg:block text-xl lg:text-2xl font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/projectsmain">Projekti</a>
            </div>
            <div className="hidden lg:block text-xl lg:text-2xl font-bold hover:text-neutral-500 cursor-pointer">
              <a href="/contact">Kontakt</a>
            </div>
            <div className="pe-10">
              <Search />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
