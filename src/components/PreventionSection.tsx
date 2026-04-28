export default function PreventionSection() {
  return (
    <section className="w-full bg-[#000a19] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center ">
          {/* Top lines — cool blue gradient */}
          <h2
            className="font-bold leading-[1.0] tracking-[-0.02em] text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(34px, 7vw, 84px)",
              backgroundImage:
                "linear-gradient(180deg, #136cfb 0%, #29bcbc 100%)",
            }}
          >
            A system for
            <br />
            people who take
          </h2>

          {/* Subtitle sandwiched between the two halves */}
          <p className="text-[#e6efff] text-[16px] md:text-[17px] font-medium leading-[1.55] max-w-[640px] opacity-85 mb-2 mt-6">
            We built Measures for everyone who prioritizes their health. Join us
            on this journey.
          </p>

          {/* Bottom lines — teal-to-white gradient */}
          <h2
            className="font-bold leading-[1.0] tracking-[-0.02em] text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(34px, 7vw, 84px)",
              backgroundImage:
                "linear-gradient(180deg, #29bcbc 0%, #e6efff 100%)",
            }}
          >
            prevention
            <br />
            seriously.
          </h2>
        </div>
      </div>
    </section>
  );
}
