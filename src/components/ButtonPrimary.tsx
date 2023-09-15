import Link from "next/link";
import { FC } from "react";

type ButtonPrimaryProps = {
  size?: "small" | "default";
  children?: string;
  href: string;
};

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  size = "default",
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className={`${
        size === "default" ? "text-sm" : "text-xs"
      } w-fit  border-b border-[#DEB49C] pb-[8px] tracking-wider uppercase`}
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
