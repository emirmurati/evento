import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
  searchParams: {
    page?: string;
    size?: string;
  };
};

// type EventsPageProps = Props & {
//   searchParams: {
//     [key: page]: string | string[] | undefined;
//     [key: size]: string | string[] | undefined;
//   };
// };

const pageNumberSchema = z.coerce.number().int().positive().default(1); // Default page = 1 if not provided
const sizeSchema = z.coerce.number().int().positive().default(6); // Default size = 6 if not provided

export default async function EventsPage({ params, searchParams }: Props) {
  const city = decodeURIComponent(params.city);

  // Validate and coerce query params using zod
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  const parsedSize = sizeSchema.safeParse(searchParams.size);

  // Extract validated page and size, use defaults if validation fails
  const page = parsedPage.success ? parsedPage.data : 1;
  const size = parsedSize.success ? parsedSize.data : 6;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={page} size={size} />
      </Suspense>
    </main>
  );
}
