function About() {
  const applications = [
    {
      number: "01",
      title: "Iron Heating",
      description:
        "Our primary focus is dependable charcoal supply for iron heating and related commercial requirements.",
      featured: true,
    },
    {
      number: "02",
      title: "Restaurants",
      description:
        "Charcoal supply for restaurants requiring dependable fuel for regular cooking operations.",
    },
    {
      number: "03",
      title: "Tandoor",
      description:
        "Suitable charcoal supply for tandoor cooking and businesses with ongoing cooking requirements.",
    },
    {
      number: "04",
      title: "BBQ",
      description:
        "Charcoal supply for BBQ cooking, grilling and related requirements.",
    },
    {
      number: "05",
      title: "Household Cooking",
      description:
        "Retail charcoal supply for household cooking and individual customer requirements.",
    },
  ]

  return (
    <main>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

        {/* Background accents */}
        <div
          className="
            pointer-events-none absolute -right-48 top-10
            h-[420px] w-[420px] rounded-full
            bg-amber-500/5 blur-3xl
            animate-pulse motion-reduce:animate-none
          "
        />

        <div
          className="
            pointer-events-none absolute -left-48 bottom-10
            h-[360px] w-[360px] rounded-full
            bg-neutral-900/5 blur-3xl
            animate-pulse motion-reduce:animate-none
          "
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div
            className="
              mx-auto max-w-3xl text-center
              animate-[fadeInUp_0.7s_ease-out]
              motion-reduce:animate-none
            "
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-amber-500 sm:w-10" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                About Us
              </span>

              <span className="h-px w-8 bg-amber-500 sm:w-10" />
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              15+ Years of Reliable
              <span className="block text-amber-500">
                Charcoal Supply
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Sri Venkateswara Charcoal Supply has been serving customers
              for more than 15 years, providing dependable charcoal supply
              for iron heating, restaurants, tandoor, BBQ and household
              cooking requirements.
            </p>
          </div>


          {/* =====================================================
              BUSINESS INTRO + OWNER IMAGE
          ====================================================== */}

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">

            {/* LEFT — BUSINESS INFORMATION */}

            <article
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-neutral-200
                bg-neutral-50
                p-8
                shadow-sm
                transition-all duration-500 ease-out
                hover:-translate-y-2
                hover:border-amber-400/60
                hover:bg-white
                hover:shadow-2xl
                hover:shadow-neutral-900/5
                animate-[fadeInLeft_0.8s_ease-out]
                motion-reduce:animate-none
                sm:p-10
              "
            >

              {/* Top animated line */}

              <div
                className="
                  absolute left-0 right-0 top-0 h-1
                  origin-left scale-x-0
                  bg-amber-500
                  transition-transform duration-700
                  group-hover:scale-x-100
                "
              />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Who We Are
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                Built Around Your Requirements
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
                Sri Venkateswara Charcoal Supply has more than 15 years of
                experience in charcoal supply. Our business is built around
                understanding customer requirements and providing suitable
                charcoal for different applications.
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                Our primary focus is supplying charcoal for iron heating and
                commercial requirements. We also serve restaurants, tandoor
                businesses, BBQ users and households.
              </p>

              {/* Experience */}

              <div
                className="
                  mt-8 rounded-2xl bg-neutral-950 p-6
                  text-white
                  transition-all duration-500
                  group-hover:shadow-xl
                  group-hover:shadow-amber-500/10
                "
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  Our Experience
                </p>

                <div className="mt-3 flex items-end gap-3">
                  <span
                    className="
                      text-6xl font-black tracking-tight
                      transition-all duration-500
                      group-hover:scale-105
                      group-hover:text-amber-400
                    "
                  >
                    15+
                  </span>

                  <span className="pb-2 text-sm font-semibold text-neutral-400">
                    Years
                    <br />
                    Experience
                  </span>
                </div>

                <div
                  className="
                    mt-5 h-px w-12 bg-amber-500
                    transition-all duration-700
                    group-hover:w-full
                  "
                />

                <p className="mt-5 text-sm leading-6 text-neutral-400">
                  Experience built through serving individual customers,
                  businesses and commercial requirements with dependable
                  charcoal supply.
                </p>
              </div>


              {/* Statistics */}

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["15+", "Years Experience"],
                  ["5", "Key Applications"],
                  ["B2B + B2C", "Supply Options"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className="
                      rounded-xl border border-neutral-200
                      bg-white p-4
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-amber-400
                      hover:shadow-lg
                    "
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <p className="text-lg font-black text-neutral-950 transition-colors duration-300 hover:text-amber-600">
                      {value}
                    </p>

                    <p className="mt-1 text-xs font-medium text-neutral-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </article>


            {/* =================================================
                RIGHT — OWNER IMAGE
            ================================================== */}

            <article
              className="
                group relative overflow-hidden
                rounded-3xl
                bg-neutral-950
                shadow-xl
                animate-[fadeInRight_0.8s_ease-out]
                motion-reduce:animate-none
              "
            >

              {/* Animated glow */}

              <div
                className="
                  pointer-events-none
                  absolute -right-24 -top-24
                  z-10 h-72 w-72
                  rounded-full
                  bg-amber-500/15
                  blur-3xl
                  transition-all duration-700
                  group-hover:scale-125
                  group-hover:bg-amber-500/20
                "
              />

              {/* Image */}

              <div className="relative h-full min-h-[520px] overflow-hidden">

                <img
  src="/images/owner.webp"
  alt="Owner of Sri Venkateswara Charcoal Supply"
  loading="lazy"
  decoding="async"
  className="
    absolute inset-0
    h-full w-full
    object-cover
    object-center
    transition-transform
    duration-700
    ease-out
    group-hover:scale-105
  "
/>

                {/* Image overlay */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-neutral-950 via-neutral-950/20 to-transparent
                    opacity-90
                  "
                />

                {/* Top border animation */}

                <div
                  className="
                    absolute left-0 right-0 top-0 z-20
                    h-1
                    origin-left scale-x-0
                    bg-amber-500
                    transition-transform duration-700
                    group-hover:scale-x-100
                  "
                />

                {/* Owner information */}

                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    z-20 p-7 sm:p-9
                    transition-transform duration-500
                    group-hover:-translate-y-1
                  "
                >

                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                    Sri Venkateswara Charcoal Supply
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    Business Owner
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-300">
                    Building a dependable charcoal supply business through
                    experience, customer relationships and reliable service.
                  </p>

                  <div
                    className="
                      mt-5 h-1 w-12 rounded-full bg-amber-500
                      transition-all duration-700
                      group-hover:w-28
                    "
                  />
                </div>
              </div>
            </article>

          </div>


          {/* =====================================================
              KEY APPLICATIONS
          ====================================================== */}

          <div className="mt-14">

            <div
              className="
                mx-auto max-w-3xl text-center
                animate-[fadeInUp_0.8s_ease-out]
                motion-reduce:animate-none
              "
            >

              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-amber-500" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                  Our Applications
                </span>

                <span className="h-px w-8 bg-amber-500" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                Charcoal for Different Requirements
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
                From iron heating and commercial operations to cooking and
                BBQ, we support customers with charcoal supply options
                suited to their requirements.
              </p>
            </div>


            {/* Application cards */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              {applications.map((item, index) => (
                <article
                  key={item.number}
                  className={`
                    group relative overflow-hidden
                    rounded-2xl p-5
                    transition-all duration-500 ease-out
                    hover:-translate-y-2
                    hover:shadow-xl
                    animate-[fadeInUp_0.6s_ease-out_both]
                    motion-reduce:animate-none
                    ${
                      item.featured
                        ? "border-2 border-amber-500 bg-neutral-950 text-white shadow-lg shadow-amber-500/10"
                        : "border border-neutral-200 bg-white text-neutral-950"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >

                  {/* Hover glow */}

                  <div
                    className={`
                      pointer-events-none absolute -right-12 -top-12
                      h-28 w-28 rounded-full blur-2xl
                      opacity-0
                      transition-all duration-500
                      group-hover:scale-150
                      group-hover:opacity-100
                      ${
                        item.featured
                          ? "bg-amber-500/15"
                          : "bg-amber-500/10"
                      }
                    `}
                  />

                  <div className="relative flex items-center justify-between">

                    <span
                      className={`
                        text-xs font-black tracking-[0.15em]
                        transition-transform duration-300
                        group-hover:translate-x-1
                        ${
                          item.featured
                            ? "text-amber-400"
                            : "text-neutral-300"
                        }
                      `}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`
                        flex h-8 w-8 items-center justify-center
                        rounded-full text-xs font-bold
                        transition-all duration-300
                        group-hover:rotate-6
                        group-hover:scale-110
                        ${
                          item.featured
                            ? "bg-amber-500 text-neutral-950"
                            : "bg-neutral-100 text-neutral-600 group-hover:bg-amber-500 group-hover:text-neutral-950"
                        }
                      `}
                    >
                      ✓
                    </span>
                  </div>

                  <h3
                    className={`
                      relative mt-6 text-lg font-bold
                      transition-colors duration-300
                      ${
                        item.featured
                          ? "text-white group-hover:text-amber-400"
                          : "text-neutral-950 group-hover:text-amber-600"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                      relative mt-3 text-xs leading-5
                      ${
                        item.featured
                          ? "text-neutral-400"
                          : "text-neutral-600"
                      }
                    `}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`
                      mt-6 h-1 w-8 rounded-full
                      transition-all duration-700
                      group-hover:w-full
                      ${
                        item.featured
                          ? "bg-amber-500"
                          : "bg-neutral-200 group-hover:bg-amber-500"
                      }
                    `}
                  />
                </article>
              ))}

            </div>
          </div>


          {/* =====================================================
              OUR APPROACH
          ====================================================== */}

          <div className="mt-14">

            <div className="grid gap-4 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Quality Products",
                  description:
                    "We focus on supplying suitable charcoal products for different applications and customer requirements.",
                },
                {
                  number: "02",
                  title: "Reliable Supply",
                  description:
                    "We support retail, wholesale and commercial customers with supply options based on their requirements.",
                },
                {
                  number: "03",
                  title: "Customer Focus",
                  description:
                    "We make it easy for customers to discuss product type, application, quantity and supply requirements.",
                },
              ].map((item, index) => (
                <article
                  key={item.number}
                  className="
                    group rounded-2xl
                    border border-neutral-200
                    bg-white p-6
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-amber-400/50
                    hover:shadow-xl
                    animate-[fadeInUp_0.7s_ease-out_both]
                    motion-reduce:animate-none
                  "
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >

                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl bg-amber-100
                      text-sm font-black text-amber-700
                      transition-all duration-300
                      group-hover:rotate-3
                      group-hover:scale-110
                      group-hover:bg-amber-500
                      group-hover:text-neutral-950
                    "
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-neutral-950 transition-colors duration-300 group-hover:text-amber-600">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-5 h-px w-8 bg-neutral-200
                      transition-all duration-500
                      group-hover:w-full
                      group-hover:bg-amber-500
                    "
                  />
                </article>
              ))}

            </div>
          </div>


          {/* =====================================================
              FINAL BUSINESS STATEMENT
          ====================================================== */}

          <div
            className="
              group relative mt-14 overflow-hidden
              rounded-3xl bg-neutral-950
              px-6 py-9 text-center
              shadow-xl
              transition-all duration-500
              hover:shadow-2xl
              hover:shadow-amber-500/10
              sm:px-10 sm:py-11
              animate-[fadeInUp_0.8s_ease-out]
              motion-reduce:animate-none
            "
          >

            <div
              className="
                pointer-events-none absolute left-1/2 top-0
                h-32 w-64 -translate-x-1/2
                rounded-full bg-amber-500/10
                blur-3xl
                transition-all duration-700
                group-hover:scale-150
              "
            />

            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                15+ Years of Experience
              </p>

              <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                Quality You Can Trust.
                <span className="text-amber-400">
                  {" "}Supply You Can Depend On.
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
                Serving iron heating, restaurants, tandoor, BBQ and
                household cooking requirements through retail, wholesale
                and commercial supply options.
              </p>

              <div
                className="
                  mx-auto mt-6 h-1 w-12 rounded-full bg-amber-500
                  transition-all duration-700
                  group-hover:w-32
                "
              />

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          ANIMATION KEYFRAMES
      ========================================================== */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  )
}

export default About