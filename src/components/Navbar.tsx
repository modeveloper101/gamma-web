import { FC,ReactElement } from "react";
import Link from "next/link";
import { bentham } from "@/app/layout";

const Navbar: FC = (): ReactElement => {
  return (
    <header className="lg:pb-[11rem]">
      <div className="relative h-32 bg-[#132340]"></div>
      <nav className="flex flex-row-reverse md:flex-row items-center justify-between py-[16px] px-[12px] lg:px-0 border-b border-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-8 h-8 md:w-10 md:h-10 text-neutral-700 hover:text-[#B9AC92] duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <Link
          href="/"
          className={`${bentham.className} text-2xl md:text-3xl text-neutral-800 uppercase`}
        >
          Gamma Creations
        </Link>
        <Link
          href="/"
          className="hidden md:block text-base tracking-wide uppercase text-neutral-700 hover:text-[#B9AC92] font-[400] duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
