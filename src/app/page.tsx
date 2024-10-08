import PopularCards from "@/components/event-popular-card";
import H1 from "@/components/H1";
import Form from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">10,000</span>{" "}
        events
      </p>
      <Form />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        {/* <p>Popular:</p> */}
        {/* <div className="space-x-2 font-semibold">
          <Link href="/events/zurich">Zurich</Link>
          <Link href="/events/stgallen">St Gallen</Link>
        </div> */}
        <PopularCards />
      </section>
    </main>
  );
}
