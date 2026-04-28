// Full-width hero backdrop — soft elliptical teal→blue dome that fades cleanly on all sides
// into the page's #000a19 background (no hard rectangular edges).
export default function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 w-full h-[620px] pointer-events-none z-0 overflow-hidden"
    >
      {/* Base dark page color — so the backdrop always matches the body */}
      <div className="absolute inset-0 bg-[#000a19]" />

      {/* Main elliptical dome: teal core on the left shoulder, deep blue on the right.
          Positioned slightly above the top so the curve peaks gracefully into the hero. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 50% -10%, rgba(41,188,188,0.95) 0%, rgba(41,188,188,0.55) 22%, rgba(19,108,251,0.45) 45%, rgba(19,108,251,0.2) 62%, rgba(0,10,25,0) 78%)",
        }}
      />

      {/* Right-side blue accent to bias the curve warmer-to-cooler left→right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 65% at 100% 0%, rgba(19,108,251,0.55) 0%, rgba(19,108,251,0) 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Left-side soft luminance to match the reference's brighter upper-left shoulder */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 55% at 10% 20%, rgba(230,239,255,0.28) 0%, rgba(230,239,255,0) 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom fade to make the curve dissolve into page bg (smooth, no seam) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,10,25,0) 55%, rgba(0,10,25,0.55) 78%, #000a19 100%)",
        }}
      />
    </div>
  );
}
