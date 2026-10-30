import { cn } from "@/lib/utils";

/** Infinite horizontally scrolling strip; duplicates content for a seamless loop. */
export function Marquee({
  items,
  className,
  slow = false,
  outlined = false,
  separator = "·",
}: {
  items: string[];
  className?: string;
  slow?: boolean;
  outlined?: boolean;
  separator?: string;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className={cn(outlined && "text-outline")}>{item}</span>
          <span className="mx-6 text-signal md:mx-10" aria-hidden>
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("marquee-hover-pause overflow-hidden", className)} aria-hidden>
      <div className={slow ? "marquee-track-slow" : "marquee-track"}>
        {row}
        {row}
      </div>
    </div>
  );
}
