'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href="/">
        <img
          alt="logo"
          src="/images/logo.png"
          className=" object-contain w-50 h-20 cursor-pointer "
        />
    </Link>
    
  );
};

export default Logo;