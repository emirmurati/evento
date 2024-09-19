import SkeletonCards from "@/components/skeleton-cards";

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {[...Array(6)].map((_, i) => (
        <SkeletonCards key={i} />
      ))}
    </div>
  );
}
