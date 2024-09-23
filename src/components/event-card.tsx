"use client";
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type EventProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <MotionLink
      ref={ref}
      className="h-[380px] flex-1 basis-80 max-w-[500px]"
      href={`/event/${event.id}`}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section
        className="relative w-full h-full flex flex-col  bg-white/[3%] rounded-xl overflow-hidden state-effect "
        key={event.id}
      >
        <Image
          src={event.images[0].url}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center ">
          <h2 className="text-2xl font-semibold ">{event.name}</h2>
          <p className="italic text-white/75">By {event.promoter.name}</p>
          {/* <p className="text-sm text-white/50">By {event.dates.start}</p> */}
        </div>
        <section className="absolute flex justify-center items-center flex-col left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {/* Format this string '2024-11-26T18:30:00Z' to have extract the day and if it's a day between 1 and 9 put a 0 before */}
            {`0${new Date(event.dates.start.dateTime).getUTCDate()}`.slice(-2)}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.dates.start.dateTime)
              .toLocaleString("en-US", { month: "short" })
              .toUpperCase()
              .slice(0, 3)}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
