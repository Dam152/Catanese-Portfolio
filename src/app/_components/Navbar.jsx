"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 100);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className="w-screen h-16 flex items-center z-50 sticky backdrop-blur-sm bg-NavColor">
      <div className="flex items-center w-full justify-between px-20 max-sm:px-10">
        <h1 className="font-bold text-4xl max-md:text-xl">Giacomo Roberti</h1>
        <div className="flex gap-10 max-md:hidden">
          <Link href={"#about"}>About me</Link>
          <Link href={"#servizi"}>Services</Link>
          <Link href={"#contatti"}>Contact me</Link>
        </div>
        {!isOpen ? (
          <IoIosMenu
            className="w-8 h-8 cursor-pointer hidden max-md:block"
            onClick={handleMenuToggle}
          ></IoIosMenu>
        ) : (
          <IoMdClose
            className="w-8 h-8 cursor-pointer hidden max-md:block"
            onClick={handleMenuToggle}
          ></IoMdClose>
        )}
      </div>
      {isOpen && (
        <div
          className={`absolute top-16 flex flex-col gap-5 bg-NavColor border-b border-white w-screen px-20 py-9 max-sm:px-10 ${
            isClosing ? "opacity-trans-close" : "opacity-trans"
          }`}
        >
          <Link href={"#about"}>About me</Link>
          <Link href={"#servizi"}>Services</Link>
          <Link href={"#contatti"}>Contact me</Link>
        </div>
      )}
    </nav>
  );
}
