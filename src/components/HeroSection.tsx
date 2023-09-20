import Image from "next/image";
import { FC } from "react";
import earrings from "../../public/model-1.jpg";
import ButtonPrimary from "./ButtonPrimary";
import { myFont } from "@/app/layout";

const HeroSection: FC = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center text-center border-b pb-[60px]">
      <Image
        src={earrings}
        quality={100}
        alt="Earrings"
        priority={true}
        className="h-[480px] mb-[60px] object-cover"
      />
      <h4
        className={`${myFont.className} mb-[12px] text-xs text-neutral-400 font-[300] tracking-wider uppercase`}
      >
        Our mission
      </h4>
      <p className="text-xl leading-[2.25rem] px-[60px] pb-[40px]">
        Each creation is produced entirely in-house, never leaving our workshop
        until it is sent to the customer.
      </p>
      <ButtonPrimary size="small" href="/">
        See our work
      </ButtonPrimary>
    </div>
  );
};

export default HeroSection;
