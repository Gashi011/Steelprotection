import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

const Search = () => {
  return (

    <Link href="/about">
      <button><IoMenuSharp /></button>
    </Link>
  );
};

export default Search;
