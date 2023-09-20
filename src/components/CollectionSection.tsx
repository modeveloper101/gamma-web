"use client";
import { FC } from "react";
import CollectionCard from "./CollectionCard";
import { myFont } from "@/app/layout";
import CarouselComponent from "./Carousel";
import ButtonPrimary from "./ButtonPrimary";

const CollectionSection: FC = () => {
  return (
    <div className="h-[70vh] py-[60px] flex flex-col items-center border-b relative z-[-9999]">
      {/* <CollectionCard /> */}
      <CarouselComponent />
      <ButtonPrimary size="small" href="/" classname="mt-auto">See our work</ButtonPrimary>
    </div>
  );
};

export default CollectionSection;
