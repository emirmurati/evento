import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";
import Select from "@/components/Select";

type Props = {
  params: {
    city: string;
  };
  searchParams: {
    page?: string;
    size?: string;
    classificationName?: "sports" | "music" | "arts";
  };
};

const pageNumberSchema = z.coerce.number().int().positive().default(1);
const sizeSchema = z.coerce.number().int().positive().default(6);

export default async function EventsPage({ params, searchParams }: Props) {
  const city = decodeURIComponent(params.city);

  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  const parsedSize = sizeSchema.safeParse(searchParams.size);
  const filter = searchParams.classificationName;

  const page = parsedPage.success ? parsedPage.data : 1;
  const size = parsedSize.success ? parsedSize.data : 6;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense key={filter} fallback={<Loading />}>
        <Select />
      </Suspense>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={page} size={size} filter={filter} />
      </Suspense>
    </main>
  );
}
