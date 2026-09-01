import { Link } from "react-router-dom"

const retailRequirements = [
  "Household requirements",
  "Cooking requirements",
  "BBQ requirements",
]

const wholesaleRequirements = [
  "Bulk requirements",
  "Commercial requirements",
  "Business enquiries",
]

function WholesaleRetail() {
  return (
    <main className="bg-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-neutral-950
          py-16
          text-white
          sm:py-20
          lg:py-24
        "
      >

        {/* Background Glows */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-0
            h-96
            w-96
            rounded-full
            bg-amber-500/10
            blur-3xl
            animate-[heroGlow_8s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-amber-500/5
            blur-3xl
            animate-[heroGlowReverse_10s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        {/* Decorative Line */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-px
            w-24
            -translate-x-1/2
            bg-amber-500/50
            animate-[lineReveal_0.8s_ease-out]
            motion-reduce:animate-none
          "
        />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              mx-auto
              max-w-3xl
              text-center
              animate-[fadeInUp_0.8s_ease-out]
              motion-reduce:animate-none
            "
          >

            {/* Eyebrow */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-3
                animate-[fadeInUp_0.7s_ease-out_0.1s_both]
                motion-reduce:animate-none
              "
            >

              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                Wholesale & Retail
              </span>

              <span className="h-px w-10 bg-amber-500" />

            </div>


            {/* Heading */}

            <h1
              className="
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-4xl
                lg:text-5xl
                animate-[titleReveal_0.8s_ease-out_0.2s_both]
                motion-reduce:animate-none
              "
            >
              Charcoal Supply

              <span
                className="
                  block
                  text-amber-400
                  animate-[titleReveal_0.8s_ease-out_0.35s_both]
                  motion-reduce:animate-none
                "
              >
                for Every Requirement
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-neutral-400
                sm:text-lg
                animate-[fadeInUp_0.8s_ease-out_0.45s_both]
                motion-reduce:animate-none
              "
            >
              Flexible charcoal supply options for individual customers,
              businesses and customers requiring larger quantities.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHOLESALE & RETAIL OPTIONS
      ========================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-neutral-50
          py-16
          sm:py-20
          lg:py-24
        "
      >

        {/* Background Accents */}

        <div
          className="
            pointer-events-none
            absolute
            -right-48
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-amber-500/5
            blur-3xl
            animate-[sectionGlow_10s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-48
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-neutral-900/5
            blur-3xl
            animate-[sectionGlowReverse_12s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-2">


            {/* =====================================================
                RETAIL CARD
            ====================================================== */}

            <article
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-8
                shadow-sm
                opacity-0
                animate-[cardReveal_0.8s_ease-out_0.2s_both]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-amber-400/60
                hover:shadow-2xl
                hover:shadow-neutral-900/10
                sm:p-10
                motion-reduce:animate-none
                motion-reduce:transition-none
              "
            >

              {/* Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-1
                  origin-left
                  scale-x-0
                  bg-amber-500
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />


              {/* Soft Hover Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  bg-amber-500/0
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:bg-amber-500/10
                "
              />


              {/* Header */}

              <div className="relative flex items-start justify-between">

                <span
                  className="
                    text-5xl
                    font-black
                    tracking-tight
                    text-neutral-100
                    transition-all
                    duration-500
                    group-hover:text-amber-500/10
                    group-hover:translate-x-1
                  "
                >
                  01
                </span>


                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-neutral-200
                    bg-neutral-50
                    text-lg
                    font-black
                    text-neutral-900
                    transition-all
                    duration-500
                    group-hover:rotate-3
                    group-hover:border-amber-500
                    group-hover:bg-amber-500
                    group-hover:text-neutral-950
                  "
                >
                  R
                </div>

              </div>


              {/* Title */}

              <h2
                className="
                  mt-7
                  text-2xl
                  font-bold
                  text-neutral-950
                  transition-colors
                  duration-300
                  group-hover:text-amber-600
                  sm:text-3xl
                "
              >
                Retail Supply
              </h2>


              {/* Description */}

              <p className="mt-4 leading-7 text-neutral-600">
                Retail supply is suitable for customers who require
                charcoal for household, cooking, BBQ and other
                individual requirements.
              </p>


              {/* Requirements */}

              <div className="mt-7">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                  Suitable For
                </p>

                <div className="mt-4 space-y-3">

                  {retailRequirements.map((item, index) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        opacity-0
                        animate-[fadeInLeft_0.5s_ease-out_both]
                        motion-reduce:animate-none
                      "
                      style={{
                        animationDelay: `${0.55 + index * 0.1}s`,
                      }}
                    >

                      <span
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-amber-500/10
                          text-xs
                          font-bold
                          text-amber-600
                          transition-all
                          duration-300
                          hover:scale-110
                          hover:bg-amber-500
                          hover:text-neutral-950
                        "
                      >
                        ✓
                      </span>

                      <span className="text-sm font-medium text-neutral-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* CTA */}

              <Link
                to="/contact"
                className="
                  group/cta
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-neutral-950
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-amber-500
                  hover:text-neutral-950
                  hover:shadow-lg
                  hover:shadow-amber-500/20
                "
              >

                <span>
                  Enquire for Retail
                </span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/cta:translate-x-1
                  "
                >
                  →
                </span>

              </Link>


              {/* Bottom Accent */}

              <div
                className="
                  mt-8
                  h-px
                  w-12
                  bg-neutral-200
                  transition-all
                  duration-700
                  group-hover:w-full
                  group-hover:bg-amber-500/40
                "
              />

            </article>


            {/* =====================================================
                WHOLESALE CARD
            ====================================================== */}

            <article
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-neutral-950
                p-8
                text-white
                shadow-xl
                opacity-0
                animate-[cardReveal_0.8s_ease-out_0.35s_both]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-amber-500/10
                sm:p-10
                motion-reduce:animate-none
                motion-reduce:transition-none
              "
            >

              {/* Background Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-amber-500/10
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:bg-amber-500/15
                "
              />


              {/* Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-1
                  origin-left
                  scale-x-0
                  bg-amber-500
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />


              {/* Header */}

              <div className="relative flex items-start justify-between">

                <span
                  className="
                    text-5xl
                    font-black
                    tracking-tight
                    text-neutral-800
                    transition-all
                    duration-500
                    group-hover:text-amber-500/20
                    group-hover:translate-x-1
                  "
                >
                  02
                </span>


                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-neutral-700
                    bg-neutral-900
                    text-lg
                    font-black
                    text-amber-400
                    transition-all
                    duration-500
                    group-hover:rotate-3
                    group-hover:border-amber-500
                    group-hover:bg-amber-500
                    group-hover:text-neutral-950
                  "
                >
                  W
                </div>

              </div>


              {/* Title */}

              <h2
                className="
                  relative
                  mt-7
                  text-2xl
                  font-bold
                  transition-colors
                  duration-300
                  group-hover:text-amber-400
                  sm:text-3xl
                "
              >
                Wholesale Supply
              </h2>


              {/* Description */}

              <p className="relative mt-4 leading-7 text-neutral-400">
                Wholesale supply is suitable for businesses and
                customers requiring charcoal in larger quantities
                for ongoing requirements.
              </p>


              {/* Requirements */}

              <div className="relative mt-7">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  Suitable For
                </p>

                <div className="mt-4 space-y-3">

                  {wholesaleRequirements.map((item, index) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        opacity-0
                        animate-[fadeInLeft_0.5s_ease-out_both]
                        motion-reduce:animate-none
                      "
                      style={{
                        animationDelay: `${0.7 + index * 0.1}s`,
                      }}
                    >

                      <span
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-amber-500/10
                          text-xs
                          font-bold
                          text-amber-400
                          transition-all
                          duration-300
                          hover:scale-110
                          hover:bg-amber-500
                          hover:text-neutral-950
                        "
                      >
                        ✓
                      </span>

                      <span className="text-sm font-medium text-neutral-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* CTA */}

              <Link
                to="/contact"
                className="
                  group/cta
                  relative
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-amber-500
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-neutral-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-amber-400
                  hover:shadow-lg
                  hover:shadow-amber-500/20
                "
              >

                <span>
                  Enquire for Wholesale
                </span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/cta:translate-x-1
                  "
                >
                  →
                </span>

              </Link>


              {/* Bottom Accent */}

              <div
                className="
                  relative
                  mt-8
                  h-px
                  w-12
                  bg-neutral-700
                  transition-all
                  duration-700
                  group-hover:w-full
                  group-hover:bg-amber-500/40
                "
              />

            </article>

          </div>


          {/* =====================================================
              BUSINESS SUPPORT STRIP
          ========================================================== */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-neutral-200
              bg-white
              px-6
              py-6
              shadow-sm
              opacity-0
              animate-[fadeInUp_0.8s_ease-out_0.7s_both]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-amber-300
              hover:shadow-lg
              sm:px-8
              motion-reduce:animate-none
              motion-reduce:transition-none
            "
          >

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-bold text-neutral-950 sm:text-base">
                  Need charcoal for a larger requirement?
                </p>

                <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                  Tell us your product type and quantity and we can
                  discuss the suitable supply option.
                </p>

              </div>


              <Link
                to="/contact"
                className="
                  group/support
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-neutral-200
                  bg-neutral-50
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-neutral-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-500
                  hover:bg-amber-500
                  hover:shadow-md
                "
              >

                Contact Us

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/support:translate-x-1
                  "
                >
                  →
                </span>

              </Link>

            </div>

          </div>


          {/* =====================================================
              TRUST LINE
          ========================================================== */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-3
              opacity-0
              animate-[fadeInUp_0.7s_ease-out_0.9s_both]
              motion-reduce:animate-none
            "
          >

            <span className="h-px w-8 bg-neutral-200 transition-all duration-500 sm:w-12" />

            <p className="text-center text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400 sm:text-[10px]">
              Retail

              <span className="mx-2 text-amber-500">
                •
              </span>

              Wholesale

              <span className="mx-2 text-amber-500">
                •
              </span>

              Commercial

              <span className="mx-2 text-amber-500">
                •
              </span>

              Reliable Supply
            </p>

            <span className="h-px w-8 bg-neutral-200 transition-all duration-500 sm:w-12" />

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
            transform: translateX(-18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }


        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes lineReveal {
          from {
            transform: translateX(-50%) scaleX(0);
            opacity: 0;
          }

          to {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
        }


        @keyframes heroGlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }

          50% {
            transform: translate(25px, 20px) scale(1.08);
            opacity: 1;
          }
        }


        @keyframes heroGlowReverse {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translate(-25px, -20px) scale(1.08);
            opacity: 0.9;
          }
        }


        @keyframes sectionGlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }

          50% {
            transform: translate(-25px, 20px) scale(1.08);
            opacity: 1;
          }
        }


        @keyframes sectionGlowReverse {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translate(25px, -20px) scale(1.08);
            opacity: 0.9;
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

export default WholesaleRetail