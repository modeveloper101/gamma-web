import { FC } from "react";
import { myFont } from "@/app/layout";
import Image from "next/image";
interface CollectionCardProps {
  id: number;
  name: string;
  collection: string;
  img: string;
}

const CollectionCard: FC<CollectionCardProps> = ({
  id,
  name,
  collection,
  img,
}) => {
  return (
    <div key={id} className="flex flex-col items-center justify-center ">
      <Image
        src={img}
        priority={true}
        width={500}
        height={500}
        quality={100}
        alt={name}
        className="h-[245px] w-auto object-cover drop-shadow-lg z-[99999]"
      />
      <div className="flex flex-col items-center justify-center text-center ">
        <h2 className={`${myFont.className} text-xl mb-2`}>{name}</h2>
        <h4 className="text-sm text-neutral-500 capitalize">{collection}</h4>
      </div>
    </div>
  );
};

export default CollectionCard;
