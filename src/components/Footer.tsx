import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="h-auto flex flex-col items-center pt-[7rem] pb-[52px] px-[48px]">
      <div>
        <ul className="flex items-center justify-center flex-wrap gap-x-[24px] mb-[28px]">
          <li>
            <Link href="/" className="text-sm tracking-wider uppercase">
              About us
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm tracking-wider uppercase">
              Workshop
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm tracking-wider uppercase">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-x-[8px]">
        <span className="text-xs tracking-wide text-neutral-900 underline uppercase">
          Visit us
        </span>
        <span className="text-xs tracking-wide text-neutral-900 uppercase">
          © Gamma Creations 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
