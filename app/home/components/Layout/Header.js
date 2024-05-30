"use client"; // Add this line at the top

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@clerk/nextjs'; // Import Clerk's useAuth hook
import logo from '../../../../public/logo.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const { isSignedIn } = useAuth(); // Destructure isSignedIn from useAuth

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 bg-s1">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image src={logo} alt="logo" width={200} height={70} />
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {!isSignedIn ?
              <>
                <Link href="/sign-in">
                  <p className="text-white mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                    Se connecter
                  </p>
                </Link>
                <Link href="/sign-up">
                  <button className="text-s1 font-bold border-s2 border-2 px-5 py-2 rounded-full bg-s2">
                    S'inscrire
                  </button>
                </Link>
              </>
            :(
              <Link href="/">
                  <p className="text-s2 font-bold border-s2 border-2 px-5 py-2 rounded-full">
                    Dashboard
                  </p>
                </Link>
            )}
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3"></div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;