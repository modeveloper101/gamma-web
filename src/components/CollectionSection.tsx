"use client";
import { FC } from "react";
import CarouselComponent from "./Carousel";
import ButtonPrimary from "./ButtonPrimary";
import CollectionData from "../../public/data/__Collections.json"

const CollectionSection: FC = () => {
  return (
    <div className="h-[65vh] pb-[60px] flex flex-col items-center border-b relative z-[-9999]">
      <CarouselComponent  collections={CollectionData}/>
      <ButtonPrimary size="small" href="/" classname="mt-auto">See our workshop</ButtonPrimary>
    </div>
  );
};

export default CollectionSection;
