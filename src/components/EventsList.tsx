import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

export default async function EventsList() {
  const events = await getEvents();
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[80px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
