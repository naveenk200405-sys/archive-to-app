import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Premium pointer aura, desktop (fine pointer) only:
 * - a soft green ambient glow that follows the cursor,
 * - a small crisp dot on the exact pointer,
 * - a trailing ring that lags behind and expands over links/buttons.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.7 });
  const glowX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.8 });
  const glowY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const t = e.target;
      setHovering(
        t instanceof Element &&
          !!t.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']"),
      );
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-[520px] w-[520px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, oklch(0.75 0.13 145 / 14%) 0%, oklch(0.75 0.13 145 / 6%) 40%, transparent 70%)",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[71]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="h-10 w-10 rounded-full border"
          style={{
            borderColor: "oklch(0.85 0.09 145 / 90%)",
            background: "oklch(0.9 0.07 145 / 10%)",
            boxShadow:
              "0 0 0 1px oklch(0.98 0.02 145 / 55%), 0 0 18px oklch(0.75 0.13 145 / 35%), inset 0 0 12px oklch(0.9 0.07 145 / 25%)",
          }}
          animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 0.85 : 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        />
      </motion.div>
      {/* Center dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[72]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="h-2 w-2 rounded-full"
          style={{
            background: "oklch(0.98 0.03 145)",
            boxShadow: "0 0 10px oklch(0.75 0.13 145 / 80%), 0 0 3px oklch(0.98 0.03 145)",
          }}
          animate={{ scale: hovering ? 0.6 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 26 }}
        />
      </motion.div>
    </>
  );
}
