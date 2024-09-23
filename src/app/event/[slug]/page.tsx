import H1 from "@/components/H1";
import { getSwissEvent } from "@/lib/server-utils";
import Image from "next/image";

type Params = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: Params) {
  const slug = params.slug;
  const event = await getSwissEvent(slug);

  return (
    <main>
      <section className="relative  overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.images[0].url}
          alt={event.name}
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw,1280"
          priority
        />
        <div className="z-1 flex flex-col items-center lg:flex-row relative gap-6 lg:gap-16">
          <Image
            src={event.images[0].url}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col ">
            <p className=" text-white/75 text-center">
              {`0${new Date(event.dates.start.dateTime).getUTCDate()}`.slice(
                -2
              )}
            </p>
            <p className="text-xs uppercase text-accent text-center">
              {new Date(event.dates.start.dateTime)
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase()
                .slice(0, 3)}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl text-2xl text-center">
              {/* get max 28 charachters from this string */}
              {event.name.slice(0, 28)}
            </H1>
            <p className="whitespace-nowrap sm:text-xl text-white/75 text-md text-center">
              Organized by <span className="italic">{event.promoter.name}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="text-center min-h-[75vh] px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>
            {event.classifications[0].segment.name}
          </SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event._embedded.venues[0].name} </SectionContent>
          <SectionContent>
            {event._embedded.venues[0].address.line1}{" "}
            {event._embedded.venues[0].city.name},{" "}
            {event._embedded.venues[0].country.name}{" "}
          </SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12 ">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
