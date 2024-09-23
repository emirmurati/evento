import "server-only";
import { notFound } from "next/navigation";

export async function getSwissEvents(city: string, page = 1, size = 6) {
  const encodedCity = encodeURIComponent(city);
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?city=${encodedCity}&page=${page}&size=${size}&apikey=${process.env.API_KEY}
`
  );
  const events = await response.json();

  return events;
}

export async function getSwissEvent(slug: string) {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events/${slug}.json?apikey=${process.env.API_KEY}
`
  );
  const event = await response.json();

  if (!event) {
    return notFound();
  }
  console.log(event);

  return event;
}
