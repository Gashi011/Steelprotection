import Link from "next/link";

import HamburgerMenu from "./HamburgerMenu";

const Search = () => {
  return (

    <Link href="/about">
      <button className="md:hidden w-6 h-6"><HamburgerMenu /></button>
      
    </Link>
  );
};

export default Search;
