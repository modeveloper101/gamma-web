"use client";

import { FC } from "react";
import { Carousel } from "flowbite-react";
import CollectionCard from "./CollectionCard";

interface Collection {
  id: number;
  name: string;
  collection: string;
  img: string;
}

interface CarouselComponentProps {
  collections: Collection[];
}

const CarouselComponent: FC<CarouselComponentProps> = ({ collections }) => {
  return (
    <Carousel className="h-96 pb-[60px] transition duration-800">
      {collections.map((item) => (
        <CollectionCard
          key={item.id}
          id={item.id}
          name={item.name}
          collection={item.collection}
          img={item.img}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
