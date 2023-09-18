import { FC, ReactElement } from "react";
import Link from "next/link";
import { lora, myFont } from "@/app/layout";
import { MapPinIcon, Bars2Icon, PhoneIcon } from "@heroicons/react/24/outline";

const Navbar: FC = (): ReactElement => {
  return (
    <header className="lg:pb-[10rem] container">
      <div className="relative flex items-center justify-center h-11 bg-neutral-900">
        <Link href="" className="text-xs lg:text-sm text-white capitalize">
          Explore our events 2023
        </Link>
      </div>
      <nav className="flex items-center justify-between py-[16px] lg:py-[48px] px-[20px] lg:px-0 border-b border-neutral-200">
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
