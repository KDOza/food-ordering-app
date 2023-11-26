'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Header() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <header className=" flex items-center justify-between text-gray-500">
        <nav className="flex items-center gap-10 text-gray-500 font-semibold ">
        <Link className="text-primary font-semibold text-3xl " href={""}>
          Sam's Pizza
        </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#contact"}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold ">
          <Link
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="bg-primary rounded-full text-white px-8 py-2 "
            href={"/register"}
          >
            Register
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
