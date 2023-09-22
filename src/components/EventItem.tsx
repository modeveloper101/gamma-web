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
    <li key={id}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[300px] w-full "
      ></div>
      <div>
        <h3 className="text-sm my-4">{date}</h3>
        <h3 className="text-xl">{name}</h3>
      </div>
    </li>
  );
};

export default EventItem;
