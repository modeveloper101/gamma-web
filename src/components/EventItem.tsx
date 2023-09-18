import { FC } from "react";

interface EventItemProps {
  id: number;
  name: string;
  date: string;
  booth: string;
  img: string;
}

const EventItem: FC<EventItemProps> = ({ id, name, date, booth, img }) => {
  return (
    <li key={id} className="pb-[16px]">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[385px] w-full mb-[20px]"
      ></div>
      <div>
        <h3 className="text-sm text-neutral-400">{date}</h3>
        <h3 className="text-base">{name}</h3>
      </div>
    </li>
  );
};

export default EventItem;