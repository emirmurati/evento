import EventCard from "./event-card";
import { getSwissEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
  size?: number;
};

export default async function EventsList({
  city,
  page = 1,
  size = 6,
}: EventsListProps) {
  const decodedCity = decodeURIComponent(city);
  const pageNumber = Number(page);
  const sizeNumber = Number(size);
  const swissEvents = await getSwissEvents(decodedCity, pageNumber, sizeNumber);
  const totalPages = swissEvents?.page?.totalPages;
  const previousPageNumber = page > 1 ? page - 1 : 1;
  const nextPageNumber =
    page < swissEvents.page.totalPages ? page + 1 : totalPages;

  const previousPath =
    page > 1 ? `/events/${city}?page=${previousPageNumber}` : "";
  const nextPath =
    page < totalPages ? `/events/${city}?page=${nextPageNumber}` : "";
  console.log(swissEvents);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {swissEvents?._embedded?.events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
