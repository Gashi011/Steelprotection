'use client'

import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
    return(
        
        <div id="navbar" className="fixed w-full max-h-32 bg-white  shadow-md z-20">
            <div className="p-6 border-b-2">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-2 md:gap-0 xl:px-14 md:px-10 sm:px-5 px-5">
                        <Logo />
                        <Search />
                    </div>
                </Container>
                
            </div>
        </div>
    )
}

export default Navbar;