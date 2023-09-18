import HeroSection from "@/components/HeroSection";
import { FC } from "react";
import EventData from "../../public/data/__Events.json";
import EventList from "@/components/EventList";

const HomePage: FC = () => {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <EventList events={EventData} />
    </main>
  );
};

export default HomePage;
