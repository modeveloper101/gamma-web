import Image from "next/image";
import { FC } from "react";
import { myFont } from "@/app/layout";
import ring from "../../public/ring-10.png";

const CollectionCard: FC = () => {
  return (
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
        <h4 className="text-sm text-neutral-500 ">Eternity collection</h4>
      </div>
    </div>
  );
};

export default CollectionCard;
