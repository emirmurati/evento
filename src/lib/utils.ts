import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "./types";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
export async function getEvents() {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=seattle`
  );
  const events: EventoEvent[] = await response.json();
  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();
  return event;
}
