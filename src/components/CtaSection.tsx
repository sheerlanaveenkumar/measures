export default function CtaSection() {
  return (
    <section className="hidden md:block w-full bg-[#000a19] py-6">
      <div className="max-w-[1200px] mx-auto px-10 flex flex-col items-center gap-10 text-center">
        <div className="max-w-[640px] flex flex-col gap-6">
          <h2 className="text-white font-bold text-[clamp(32px,4vw,49px)] leading-[1.05] tracking-[-0.02em] text-left">
            Stay in control of your{" "}
            <br className="hidden md:block" />
            health trajectory.
          </h2>
          <p className="text-[#e6efff] text-base font-medium leading-[1.5] opacity-85 text-left" style={{ fontSize: '16px' }}>
            Measures helps you connect daily nutrition to real biological outcomes; so prevention becomes
            more visible, more disciplined, and more actionable.
          </p>
        </div>

        <button className="bg-white text-[#000a19] font-semibold text-base px-6 py-3.5 rounded-full w-48 hover:bg-[#e6efff] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
          Get the App
        </button>

        {/* Decorative glow */}
        <div
          className="absolute pointer-events-none w-[600px] h-[300px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, #136cfb 0%, transparent 70%)",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        />
      </div>
    </section>
  );
}
