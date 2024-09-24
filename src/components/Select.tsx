"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = [
  {
    name: "All",
    pathname: "",
  },
  {
    name: "Sports",
    pathname: "Sports",
  },
  {
    name: "Music",
    pathname: "Music",
  },
  {
    name: "Arts",
    pathname: "Arts",
  },
];

export default function Select() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("classificationName", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  const params = new URLSearchParams(searchParams);
  const classificationName = params.get("classificationName");

  return (
    <div className="flex gap-x-4 mt-4 mb-8 relative transition">
      {buttonVariants.map((button) => (
        <li
          key={button.pathname}
          className={cn(
            " hover:text-white flex items-center relative transition",
            {
              "text-white": classificationName === button.pathname,
              "text-white/50": classificationName !== button.pathname,
            }
          )}
        >
          <button
            onClick={() => {
              return handleFilter(button.pathname);
            }}
          >
            {button.name}
          </button>
          {classificationName === button.pathname && (
            <motion.div
              layoutId="header-active-link"
              className="bg-accent h-1 w-full absolute bottom-[-8px]"
            ></motion.div>
          )}
        </li>
      ))}
    </div>
  );
}
