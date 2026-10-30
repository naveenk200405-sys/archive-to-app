import React, { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  animate,
  type HTMLMotionProps,
} from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word rising headline. */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.7, ease: EASE },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Animated number that counts up when it enters the viewport. */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(v),
      onComplete: () => setValue(to),
    });
    return () => {
      controls.stop();
      setValue(to);
    };
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Slow vertical parallax for decorative elements. */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: distance }}
      whileInView={{ y: -distance }}
      viewport={{ margin: "-15% 0px" }}
      transition={{ ease: "linear", duration: 0 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

export { motion, EASE };

/** Pointer-follow CSS vars (--mx/--my) for spotlight effects. */
export function spotlight(e: React.PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

/** Magnetic pull toward the cursor (max ~6px), desktop mouse only. */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 6;
    const dy = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 6;
    el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <span
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={cn("inline-flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [&>*]:w-full [&>*]:justify-center", className)}
    >
      {children}
    </span>
  );
}
