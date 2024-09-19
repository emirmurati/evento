"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    router.push(`/events/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city"
        spellCheck={false}
      />
    </form>
  );
}
