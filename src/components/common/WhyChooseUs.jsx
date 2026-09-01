const features = [
  {
    number: "01",
    title: "Quality Products",
    description:
      "Charcoal products selected for household, cooking, commercial and grounding requirements.",
  },
  {
    number: "02",
    title: "Wholesale & Retail",
    description:
      "Flexible supply options for individual customers and businesses requiring larger quantities.",
  },
  {
    number: "03",
    title: "Reliable Supply",
    description:
      "Consistent charcoal availability for customers who depend on regular supply.",
  },
  {
    number: "04",
    title: "Customer Support",
    description:
      "Simple assistance for product enquiries, quantities and supply requirements.",
  },
]

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-amber-500 sm:w-10" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-amber-500 sm:w-10" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted Charcoal Supply.
            <span className="block text-amber-400">Made Simple.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:mt-5 sm:text-base sm:leading-7">
            Dependable charcoal products for households, businesses and
            commercial requirements.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-neutral-800
                bg-neutral-900/70
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-amber-500/50
                hover:bg-neutral-900
                hover:shadow-xl
                hover:shadow-amber-500/5
                sm:p-6
              "
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-amber-500/70 transition-all duration-300 group-hover:bg-amber-400" />

              {/* Number + Check */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-3xl font-black tracking-tight
                    text-amber-400/60
                    transition-colors duration-300
                    group-hover:text-amber-400
                    sm:text-4xl
                  "
                >
                  {feature.number}
                </span>

                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-amber-500/50
                    bg-amber-500/[0.06]
                    text-base font-black
                    text-amber-400
                    transition-all duration-300
                    group-hover:border-amber-400
                    group-hover:bg-amber-500
                    group-hover:text-neutral-950
                  "
                >
                  ✓
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-7
                  text-lg font-bold
                  text-white
                  transition-colors duration-300
                  group-hover:text-amber-400
                  sm:text-xl
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-neutral-400
                  transition-colors duration-300
                  group-hover:text-neutral-300
                "
              >
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  mt-6
                  h-0.5
                  w-9
                  rounded-full
                  bg-amber-500/70
                  transition-all duration-500
                  group-hover:w-full
                  group-hover:bg-amber-400
                "
              />
            </article>
          ))}
        </div>

        {/* Trust Strip */}
        <div
          className="
            mt-8
            rounded-2xl
            border border-amber-500/20
            bg-amber-500/[0.04]
            px-5 py-5
            sm:mt-10 sm:px-7 sm:py-6
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-amber-400 sm:text-base">
                Quality You Can Trust.
              </p>

              <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                Retail, wholesale and commercial charcoal supply.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-amber-500/25 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-amber-300">
                Retail
              </span>

              <span className="rounded-full border border-amber-500/25 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-amber-300">
                Wholesale
              </span>

              <span className="rounded-full border border-amber-500/25 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-amber-300">
                Commercial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
