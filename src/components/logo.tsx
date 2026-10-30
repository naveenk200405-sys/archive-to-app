/** Transparent SVG wordmark: "customeragent" + green full stop. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 40" className={className} role="img" aria-label="customeragent.">
      <text
        x="0"
        y="31"
        textLength="246"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="Archivo, 'Hanken Grotesk', system-ui, sans-serif"
        fontWeight="800"
        fontSize="36"
        letterSpacing="-1.5"
        fill="currentColor"
      >
        customeragent<tspan fill="var(--signal)">.</tspan>
      </text>
    </svg>
  );
}
