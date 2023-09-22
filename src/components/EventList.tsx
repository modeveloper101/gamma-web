import { FC } from "react";
import { myFont } from "@/app/layout";
import EventItem from "./EventItem";

interface Event {
  id: number;
  name: string;
  date: string;
  booth: string;
  img: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <div className="flex flex-col items-center text-center py-[60px] px-[32px] border-b">

        <h4 className={`${myFont.className} mb-[28px] text-xl uppercase`}>
          Events
        </h4>

      <ul className="flex flex-col gap-y-[44px]">
        {events.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date}
            booth={event.booth}
            img={event.img}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
