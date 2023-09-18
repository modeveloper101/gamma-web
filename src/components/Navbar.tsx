"use client";
import { FC, ReactElement } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { myFont } from "@/app/layout";
import { Bars2Icon, PhoneIcon } from "@heroicons/react/24/outline";

const Navbar: FC = (): ReactElement => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="lg:pb-[10rem]">
      <div className="relative flex items-center justify-center h-11 bg-neutral-900">
        <Link href="" className="text-xs lg:text-sm text-white uppercase">
          Explore our events 2023
        </Link>
      </div>
      <nav
        className={`${
          isNavbarSticky ? "fixed top-0 left-0 right-0" : ""
        } flex items-center justify-between py-[16px] lg:py-[48px] px-[20px] lg:px-0 border-b border-neutral-200 bg-[#F8F8F8]`}
      >
        <Bars2Icon
          strokeWidth="1"
          className="block lg:hidden w-8 h-8 text-neutral-900"
        />
        <div className="hidden lg:flex items-center gap-x-[32px]">
          <Link
            href="/"
            className="hidden lg:block text-sm tracking-wide uppercase text-neutral-700 hover:text-[#DEB49C] font-[400] duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            className="hidden lg:block text-sm tracking-wide uppercase text-neutral-700 hover:text-[#DEB49C] font-[400] duration-300"
          >
            Work
          </Link>
        </div>
        <Link
          href="/"
          className={`${myFont.className} text-2xl md:text-3xl text-neutral-800 uppercase`}
        >
          Gamma Creations
        </Link>
        <div className="flex items-center gap-x-[16px]">
          <Link
            href="/"
            className="hidden lg:block text-sm tracking-wide uppercase text-neutral-700 hover:text-[#DEB49C] font-[400] duration-300"
          >
            Get in touch
          </Link>
          <PhoneIcon strokeWidth="1" className="w-5 h-5 text-neutral-900" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
