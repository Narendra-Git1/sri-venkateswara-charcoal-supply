const features = [
  {
    number: "01",
    title: "Quality Products",
    description:
      "Charcoal products selected to support different household, cooking, commercial and grounding requirements.",
  },
  {
    number: "02",
    title: "Wholesale & Retail",
    description:
      "Supply options for both individual customers and businesses requiring charcoal in larger quantities.",
  },
  {
    number: "03",
    title: "Reliable Supply",
    description:
      "A dependable charcoal supply approach for customers who need consistent product availability.",
  },
  {
    number: "04",
    title: "Customer Support",
    description:
      "Easy contact options to help customers enquire about products, quantities and requirements.",
  },
]

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-neutral-950 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-500" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
              Why Choose Us
            </span>

            <span className="h-px w-10 bg-amber-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quality Charcoal.
            <span className="block text-amber-400">
              Reliable Supply.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            We focus on providing dependable charcoal products and supply
            options for households, businesses and commercial requirements.
          </p>

        </div>

        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">

          {features.map((feature) => (
            <article
              key={feature.number}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-neutral-800
                bg-neutral-900/70
                p-6
                transition-all duration-300
                hover:-translate-y-2
                hover:border-amber-500/50
                hover:bg-neutral-900
                hover:shadow-2xl
                hover:shadow-amber-500/5
                sm:p-7
              "
            >

              {/* Top Accent */}
              <div
                className="
                  absolute left-0 right-0 top-0
                  h-0.5
                  origin-left
                  scale-x-0
                  bg-amber-500
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />

              {/* Number + Icon */}
              <div className="flex items-center justify-between">

                {/* Number */}
                <span
                  className="
                    text-4xl font-black tracking-tight
                    text-neutral-800
                    transition-colors duration-300
                    group-hover:text-amber-500/20
                  "
                >
                  {feature.number}
                </span>

                {/* Check Icon */}
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-neutral-700
                    bg-neutral-950
                    text-sm font-bold
                    text-neutral-400
                    transition-all duration-300
                    group-hover:border-amber-500
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
                  mt-8
                  text-xl font-bold
                  text-white
                  transition-colors duration-300
                  group-hover:text-amber-400
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-neutral-400
                  transition-colors duration-300
                  group-hover:text-neutral-300
                "
              >
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  mt-7
                  h-px
                  w-10
                  bg-neutral-700
                  transition-all duration-500
                  group-hover:w-full
                  group-hover:bg-amber-500/40
                "
              />

            </article>
          ))}

        </div>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}
        <div
          className="
            mt-10
            rounded-2xl
            border border-amber-500/20
            bg-amber-500/[0.04]
            px-6 py-6
            sm:px-8
          "
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-bold text-amber-400 sm:text-base">
                Quality You Can Trust. Supply You Can Depend On.
              </p>

              <p className="mt-1.5 text-xs leading-5 text-neutral-500">
                Serving retail, wholesale and commercial charcoal requirements.
              </p>
            </div>

            {/* Supply Categories */}
            <div className="flex flex-wrap gap-2">

              <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400">
                Retail
              </span>

              <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400">
                Wholesale
              </span>

              <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400">
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