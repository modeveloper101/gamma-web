import Image from "next/image";
import { FC } from "react";
import earrings from "../../public/earrings.jpg";
import ButtonPrimary from "./ButtonPrimary";
import { myFont } from "@/app/layout";

const HeroSection: FC = () => {
  return (
    <div className="container h-auto w-full flex flex-col items-center text-center">
      <Image
        src={earrings}
        quality={100}
        alt="Earrings"
        priority={true}
        className="h-[450px] mb-[60px] object-cover"
      />
      <h4
        className={`${myFont.className} mb-[12px] text-xs text-neutral-300 font-[300] tracking-wider uppercase`}
      >
        Our mission
      </h4>
      <p className="text-2xl leading-[2.5rem] px-[32px] pb-[32px]">
        Each creation is produced entirely in-house, never leaving our workshop
        until it is sent to the customer.
      </p>
      <ButtonPrimary size="small" href="/">
        Discover our work
      </ButtonPrimary>
    </div>
  );
};

export default HeroSection;
