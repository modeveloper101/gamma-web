import HeroSection from "@/components/HeroSection";
import { FC } from "react";
import EventData from "../../public/data/__Events.json";
import EventList from "@/components/EventList";
import CollectionSection from "@/components/CollectionSection";

const HomePage: FC = () => {

  return (
    <main className="min-h-screen">
      <HeroSection />
      <CollectionSection />
      <EventList events={EventData} />
    </main>
  );
};

export default HomePage;
