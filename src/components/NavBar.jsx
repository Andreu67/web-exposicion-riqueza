"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full text-white-rgba fixed top-0 left-0 right-0 z-10 border-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo-mascamarena.png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex border-b-2 ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 border-black md:border-b-0  hover:bg-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 border-black hover:bg-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="/PEP" onClick={() => setNavbar(!navbar)}>
                    ¿Qué es el PEP?
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0 border-black hover:bg-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                    Sobre
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0 border-black hover:bg-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                    ---
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0 border-black hover:bg-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                    ---
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
