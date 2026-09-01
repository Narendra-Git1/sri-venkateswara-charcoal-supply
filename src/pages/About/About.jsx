import SectionHeading from "../../components/common/SectionHeading"

function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        {/* Background Accent */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              SECTION HEADER
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                About Us
              </span>

              <span className="h-px w-10 bg-amber-500" />
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Reliable Charcoal Supply
              <span className="block text-amber-500">
                Built Around Your Requirements
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Sri Venkateswara Charcoal Supply provides charcoal solutions
              for household, cooking, commercial, BBQ and grounding
              requirements.
            </p>

          </div>

          {/* =====================================================
              ABOUT CONTENT
          ====================================================== */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {/* Quality Products */}
            <article
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-neutral-200
                bg-neutral-50
                p-8
                transition-all duration-300
                hover:-translate-y-1
                hover:border-amber-400/60
                hover:bg-white
                hover:shadow-xl
                hover:shadow-neutral-900/5
                sm:p-10
              "
            >

              {/* Top Accent */}
              <div
                className="
                  absolute left-0 right-0 top-0
                  h-1
                  origin-left
                  scale-x-0
                  bg-amber-500
                  transition-transform duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Number */}
              <div className="flex items-center justify-between">

                <span
                  className="
                    text-5xl font-black tracking-tight
                    text-neutral-200
                    transition-colors duration-300
                    group-hover:text-amber-500/15
                  "
                >
                  01
                </span>

                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-neutral-300
                    bg-white
                    text-lg font-bold
                    text-neutral-700
                    transition-all duration-300
                    group-hover:border-amber-500
                    group-hover:bg-amber-500
                    group-hover:text-neutral-950
                  "
                >
                  ✓
                </div>

              </div>

              {/* Content */}
              <h2
                className="
                  mt-8 text-2xl font-bold text-neutral-950
                  transition-colors duration-300
                  group-hover:text-amber-600
                "
              >
                Quality Products
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                We focus on supplying suitable charcoal products for
                different customer and business requirements, including
                household, cooking, BBQ, commercial and grounding needs.
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  mt-8 h-px w-12
                  bg-neutral-300
                  transition-all duration-500
                  group-hover:w-full
                  group-hover:bg-amber-500/40
                "
              />

            </article>

            {/* Reliable Supply */}
            <article
              className="
                group relative overflow-hidden
                rounded-3xl
                bg-neutral-950
                p-8 text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-amber-500/10
                sm:p-10
              "
            >

              {/* Amber Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

              {/* Top Accent */}
              <div
                className="
                  absolute left-0 right-0 top-0
                  h-1
                  origin-left
                  scale-x-0
                  bg-amber-500
                  transition-transform duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Number */}
              <div className="relative flex items-center justify-between">

                <span
                  className="
                    text-5xl font-black tracking-tight
                    text-neutral-800
                    transition-colors duration-300
                    group-hover:text-amber-500/20
                  "
                >
                  02
                </span>

                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-neutral-700
                    bg-neutral-900
                    text-lg font-bold
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

              {/* Content */}
              <div className="relative">

                <h2
                  className="
                    mt-8 text-2xl font-bold
                    transition-colors duration-300
                    group-hover:text-amber-400
                  "
                >
                  Reliable Supply
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-neutral-400">
                  Our goal is to provide dependable charcoal supply for
                  both retail customers and businesses requiring larger
                  quantities, with a straightforward approach to customer
                  requirements.
                </p>

                {/* Supply Tags */}
                <div className="mt-8 flex flex-wrap gap-2">

                  <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400">
                    Retail
                  </span>

                  <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400">
                    Wholesale
                  </span>

                  <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400">
                    Commercial
                  </span>

                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    mt-8 h-px w-12
                    bg-neutral-700
                    transition-all duration-500
                    group-hover:w-full
                    group-hover:bg-amber-500/40
                  "
                />

              </div>

            </article>

          </div>

          {/* =====================================================
              BUSINESS STATEMENT
          ====================================================== */}
          <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-950 px-6 py-8 text-center sm:px-10 sm:py-10">

            <p className="text-lg font-bold text-white sm:text-xl">
              Quality You Can Trust.
              <span className="text-amber-400">
                {" "}Supply You Can Depend On.
              </span>
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Serving customers with charcoal supply options for household,
              cooking, BBQ, commercial, wholesale and grounding requirements.
            </p>

          </div>

        </div>
      </section>
    </main>
  )
}

export default About