export default function PreventionSection() {
  return (
    <section className="w-full bg-[#000a19] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center ">
          {/* Top lines — cool blue gradient */}
          <h2
            className="font-bold tracking-[-0.02em] text-transparent bg-clip-text"
            style={{
              fontFamily: "Gellix, sans-serif",
              fontSize: "clamp(40px, 8vw, 84px)",
              lineHeight: "0.95",
              backgroundImage:
                "radial-gradient(20% 42.13% at 0% 16.99%, rgba(255, 255, 255, 0.7) 0%, rgba(0, 49, 127, 0.5) 100%), radial-gradient(25.65% 122.64% at 0% 100%, #FFFFFF 0%, rgba(19, 108, 251, 0) 100%), radial-gradient(21.09% 83.96% at 1.3% 100%, #FFFFFF 0%, rgba(19, 108, 251, 0) 100%), radial-gradient(43.7% 88.32% at 75.88% 100%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(41.09% 78.11% at 72.39% 100%, #29BCBC 0%, rgba(41, 188, 188, 0) 100%), linear-gradient(132.31deg, #136CFB 18.45%, #29BCBC 56.72%, #FFFFFF 73.82%)",
              backgroundBlendMode: "color-dodge",
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
            className="font-bold tracking-[-0.02em] text-transparent bg-clip-text"
            style={{
              fontFamily: "Gellix, sans-serif",
              fontSize: "clamp(40px, 8vw, 84px)",
              lineHeight: "0.95",
              backgroundImage:
                "radial-gradient(20% 42.13% at 0% 16.99%, rgba(255, 255, 255, 0.7) 0%, rgba(0, 49, 127, 0.5) 100%), radial-gradient(25.65% 122.64% at 0% 100%, #FFFFFF 0%, rgba(19, 108, 251, 0) 100%), radial-gradient(21.09% 83.96% at 1.3% 100%, #FFFFFF 0%, rgba(19, 108, 251, 0) 100%), radial-gradient(43.7% 88.32% at 75.88% 100%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(41.09% 78.11% at 72.39% 100%, #29BCBC 0%, rgba(41, 188, 188, 0) 100%), linear-gradient(132.31deg, #136CFB 18.45%, #29BCBC 56.72%, #FFFFFF 73.82%)",
              backgroundBlendMode: "color-dodge",
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
