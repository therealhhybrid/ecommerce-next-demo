import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center px-4  md:px-12  justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image src="/lao.png" width={70} height={70} alt="logo" />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-purple-600 text-white border-transparent hover:border-purple-600 hover:bg-transparent hover:text-black">
          {" "}
          Log in
        </button>
        <button className="button bg-transparent border-purple-600 hover:bg-purple-600 hover:bg-transparent hover:text-white hover:border-transparent">
          {" "}
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
