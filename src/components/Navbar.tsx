import { FC, ReactElement } from "react";
import Link from "next/link";
import { bentham } from "@/app/layout";
import { MapPinIcon, Bars2Icon } from "@heroicons/react/24/outline";

const Navbar: FC = (): ReactElement => {
  return (
    <header className="lg:pb-[10rem] container">
      <div
        className="relative h-32 bg-site-header"
        style={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <nav className="flex items-center justify-between py-[20px] px-[12px] lg:px-0 border-b border-neutral-200">
        <Bars2Icon strokeWidth="0.8" className="block lg:hidden w-8 h-8" />
        <div className="hidden lg:flex items-center gap-x-[32px]">
          <Link
            href="/"
            className="hidden lg:block text-sm tracking-wide uppercase text-neutral-700 hover:text-[#B9AC92] font-[400] duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            className="hidden lg:block text-sm tracking-wide uppercase text-neutral-700 hover:text-[#B9AC92] font-[400] duration-300"
          >
            Events
          </Link>
        </div>
        <Link
          href="/"
          className={`${bentham.className} text-2xl md:text-3xl text-neutral-800 uppercase`}
        >
          Gamma Creations
        </Link>
        <div className="flex items-center gap-x-[16px]">
          <Link
            href="/"
            className="hidden lg:block text-sm tracking-wide uppercase text-neutral-700 hover:text-[#B9AC92] font-[400] duration-300"
          >
            Get in touch
          </Link>
          <MapPinIcon strokeWidth="0.8" className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
