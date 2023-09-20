"use client";

import { FC } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { myFont } from "@/app/layout";
import ring from "../../public/ring-10.png";
import ring2 from "../../public/ring-9.png";

const CarouselComponent: FC = () => {
  return (
    <Carousel className="h-96 pb-[60px] custom-carousel">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={ring}
          alt="Silver Ring"
          quality={100}
          priority={true}
          className="h-[245px] w-auto object-cover drop-shadow-lg"
        />
        <div className="flex flex-col items-center justify-center text-center ">
          <h2 className={`${myFont.className} text-xl mb-2`}>
            Eternity Silver Ring
          </h2>
          <h4 className="text-sm text-neutral-500 capitalize">Eternity collection</h4>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={ring2}
          alt="Silver Ring"
          quality={100}
          priority={true}
          className="h-[245px] w-auto object-cover drop-shadow-lg"
        />
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className={`${myFont.className} text-xl mb-2`}>
            Eternity Gold Ring
          </h2>
          <h4 className="text-sm text-neutral-500 capitalize">Eternity collection</h4>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
