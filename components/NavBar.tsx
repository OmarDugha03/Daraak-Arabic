"use client";
import { hamburger, logo } from "@/public";
import Image from "next/image";
import { FC, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";

const db20 = localFont({
  src: "../public/fonts/20db.otf",
  display: "swap",
});
interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  function handleToggle() {
    return setToggle((prev) => {
      return !prev;
    });
  }
  return (
    <nav className="px-4 lg:px-44 flex justify-between items-center shadow-md  bg-[#8198DA]/20 h-[6.1875rem]">
      <div className="flex items-center justify-center gap-x-4 ">
        <Image src={logo} alt="logo" />
        <span
          className={`${db20.className} text-2xl lg:text-[2.25rem]`}
          style={{
            color: "var(--1, #2654DE)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}>
          Daraak
        </span>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden z-50 flex items-center justify-center">
        <Image src={hamburger} onClick={handleToggle} alt="hamburger" />
        {toggle && (
          <div className="absolute w-56 top-20  mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg right-4 top-30 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Link
              onClick={handleToggle}
              className={`group text-right flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="#home">
              الرئيسية{" "}
            </Link>

            <Link
              onClick={handleToggle}
              className={`group text-right flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="#about">
              من نحن{" "}
            </Link>

            <Link
              onClick={handleToggle}
              className={`group text-right flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="#goal">
              أهدافنا{" "}
            </Link>
          </div>
        )}
      </div>
      {toggle && (
        <div
          className="fixed left-0 top-0 z-20 h-screen w-screen bg-black opacity-70"
          onClick={handleToggle}
        />
      )}

      <ul
        dir="rtl"
        className={`${db20} hidden lg:flex  lg:justify-between leading-relaxed lg:items-center gap-x-24 me-12`}>
        <li>
          <Link
            href="#home"
            style={{
              color: "var(--black, #282828)",
              fontSize: "1.2rem,",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            className={db20.className}>
            الرئيسية{" "}
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            style={{
              color: "var(--black, #282828)",
              fontSize: "1.2rem,",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            className={db20.className}>
            من نحن
          </Link>
        </li>
        <li>
          <Link
            href="#goal"
            style={{
              color: "var(--black, #282828)",
              fontSize: "1.2rem,",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            className={db20.className}>
            أهدافنا
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
