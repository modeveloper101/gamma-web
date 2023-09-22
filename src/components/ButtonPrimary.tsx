import Link from "next/link";
import { FC } from "react";

type ButtonPrimaryProps = {
  size?: "small" | "default";
  children?: string;
  href: string;
  classname?: string
};

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  size = "default",
  href,
  children,
  classname
}) => {
  return (
    <Link
      href={href}
      className={`${
        size === "default" ? "text-sm" : "text-[13px]"
      } w-fit  border-b border-[#DEB49C] pb-[8px] tracking-wider uppercase ${classname}`}
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
