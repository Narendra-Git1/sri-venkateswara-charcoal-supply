import ContactActions from "../../components/contact/ContactActions"
import WhyChooseUs from "../../components/common/WhyChooseUs"
import ProductsSection from "../../components/products/ProductsSection"
import WholesaleSection from "../../components/wholesale/WholesaleSection"
import GallerySection from "../../components/gallery/GallerySection"
import FAQSection from "../../components/faq/FAQSection"
import ContactSection from "../../components/contact/ContactSection"
import About from "../About/About"

const services = [
  {
    title: "Household",
    description: "Cooking needs",
  },
  {
    title: "Restaurants",
    description: "Regular supply",
  },
  {
    title: "Tandoor",
    description: "High-heat use",
  },
  {
    title: "BBQ",
    description: "Grilling needs",
  },
  {
    title: "Iron Heating",
    description: "Heating applications",
  },
]

const trustPoints = [
  "15+ Years Experience",
  "Quality Charcoal",
  "Retail & Bulk Supply",
]

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-amber-500/[0.06]
            blur-3xl
            animate-[heroGlow_8s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-48
            -left-40
            h-[380px]
            w-[380px]
            rounded-full
            bg-amber-500/[0.035]
            blur-3xl
            animate-[heroGlowReverse_9s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            py-8
            sm:px-6
            sm:py-10
            lg:px-8
            lg:py-11
            xl:py-12
          "
        >
          {/* =====================================================
              MAIN HERO GRID
              LEFT  = Business information
              RIGHT = Main business image
          ====================================================== */}
          <div
            className="
              grid
              items-start
              gap-8
              lg:grid-cols-[1.04fr_0.96fr]
              lg:gap-10
              xl:gap-12
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div
              className="
                min-w-0
                animate-[heroLeft_0.7s_ease-out_both]
                motion-reduce:animate-none
              "
            >
              {/* Trust badge */}
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-amber-400/25
                  bg-amber-400/[0.07]
                  px-4
                  py-2.5
                  text-amber-300
                  transition-all
                  duration-300
                  md:hover:-translate-y-0.5
                  md:hover:border-amber-400/50
                  md:hover:bg-amber-400/[0.11]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                    bg-amber-400
                    shadow-[0_0_12px_rgba(251,191,36,0.65)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    sm:text-xs
                  "
                >
                  Trusted Charcoal Supplier
                </span>
              </div>

              {/* Main headline */}
              <h1
                className="
                  animate-[heroHeading_0.75s_ease-out_0.08s_both]
                  motion-reduce:animate-none
                  max-w-3xl
                  text-[3rem]
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[3.65rem]
                  xl:text-[4rem]
                "
              >
                Quality Charcoal.
                <span className="block text-amber-400">
                  Reliable Supply.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-5
                  animate-[heroFade_0.65s_ease-out_0.18s_both]
                  motion-reduce:animate-none
                  max-w-2xl
                  text-base
                  leading-7
                  text-neutral-300
                  sm:text-lg
                  sm:leading-8
                  lg:max-w-xl
                "
              >
                Quality charcoal solutions for household cooking, restaurants,
                tandoors, BBQs, iron heating and commercial requirements.
              </p>

              {/* Trust points */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  animate-[heroFade_0.65s_ease-out_0.25s_both]
                  motion-reduce:animate-none
                  items-center
                  gap-x-6
                  gap-y-3
                "
              >
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-400/10
                        text-xs
                        font-black
                        text-amber-400
                      "
                    >
                      ✓
                    </span>

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-neutral-300
                        sm:text-sm
                      "
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* =================================================
                  CTA AREA
              ================================================== */}
              <div className="
                mt-7
                animate-[heroFade_0.65s_ease-out_0.32s_both]
                motion-reduce:animate-none
              ">
                <ContactActions />
              </div>

              {/* Service statement */}
              <div className="
                mt-6
                flex
                items-center
                gap-3
                animate-[heroFade_0.65s_ease-out_0.38s_both]
                motion-reduce:animate-none
              ">
                <span
                  aria-hidden="true"
                  className="h-px w-9 shrink-0 bg-amber-500"
                />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                    sm:text-xs
                  "
                >
                  Retail & Bulk Charcoal Supply
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
                No floating experience card.
                No overlay information card.
            ================================================== */}
            <div
              className="
                relative
                min-w-0
                animate-[heroRight_0.8s_ease-out_0.12s_both]
                motion-reduce:animate-none
              "
            >
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-neutral-800
                  bg-neutral-900
                  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-500
                  md:hover:border-amber-400/30
                  md:hover:shadow-[0_30px_90px_rgba(245,158,11,0.08)]
                "
              >
                <img
                  src="/images/bbq-charcoal.jpg"
                  alt="Quality charcoal for cooking, BBQ and commercial requirements"
                  loading="eager"
                  decoding="async"
                  className="
                    aspect-[1.18/1]
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    md:group-hover:scale-[1.025]
                  "
                />

                {/* Very light bottom gradient for depth */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-24
                    bg-gradient-to-t
                    from-black/20
                    to-transparent
                  "
                />
              </div>

              {/* =================================================
                  BUSINESS HIGHLIGHTS / QUOTES
                  Positioned directly below the right-side image.
                  Clean, compact and non-overlapping.
              ================================================== */}
              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-3
                  lg:grid-cols-1
                  xl:grid-cols-3
                  animate-[heroFade_0.65s_ease-out_0.38s_both]
                  motion-reduce:animate-none
                "
              >
                

                <div
                  className="
                    group
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900/55
                    px-4
                    py-3.5
                    transition-all
                    duration-300
                    md:hover:-translate-y-1
                    md:hover:border-amber-400/30
                    md:hover:bg-neutral-900
                  "
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-400/10
                        text-sm
                        text-amber-400
                      "
                    >
                      “
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                      Reliable Supply
                    </p>
                  </div>
                  <p className="text-xs leading-5 text-neutral-400 sm:text-sm">
                    Retail and bulk supply with a focus on reliable service and timely requirements.
                  </p>
                </div>

                <div
                  className="
                    group
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900/55
                    px-4
                    py-3.5
                    transition-all
                    duration-300
                    md:hover:-translate-y-1
                    md:hover:border-amber-400/30
                    md:hover:bg-neutral-900
                  "
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-400/10
                        text-sm
                        text-amber-400
                      "
                    >
                      “
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                      Trusted Service
                    </p>
                  </div>
                  <p className="text-xs leading-5 text-neutral-400 sm:text-sm">
                    Serving household, restaurants, tandoors, BBQ and iron-heating needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SUITABLE FOR
              Full width below the main hero.
          ====================================================== */}
          <div className="mt-10 border-t border-neutral-800 pt-7 sm:mt-12">
            {/* Section heading */}
            <div className="mb-5 flex items-center gap-4">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-neutral-400
                  sm:text-xs
                "
              >
                Suitable For
              </p>

              <span
                aria-hidden="true"
                className="h-px w-10 bg-neutral-800"
              />
            </div>

            {/* Service cards */}
            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
              "
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  className="
                    group
                    min-h-[108px]
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-neutral-900/45
                    px-5
                    py-5
                    transition-all
                    duration-300
                    md:hover:-translate-y-1
                    md:hover:border-amber-400/35
                    md:hover:bg-neutral-900
                    md:hover:shadow-[0_12px_35px_rgba(245,158,11,0.05)]
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      mb-4
                      h-1
                      w-8
                      rounded-full
                      bg-amber-500/70
                      transition-all
                      duration-300
                      md:group-hover:w-11
                      md:group-hover:bg-amber-400
                    "
                  />

                  <p
                    className="
                      text-base
                      font-bold
                      text-white
                      transition-colors
                      duration-300
                      md:group-hover:text-amber-300
                    "
                  >
                    {service.title}
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      leading-5
                      text-neutral-500
                      transition-colors
                      duration-300
                      md:group-hover:text-neutral-300
                    "
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              BOTTOM TRUST STRIP
              Kept simple and centered to avoid empty/overlapping
              content on wide screens.
          ====================================================== */}
          <div
            className="
              mt-7
              border-t
              border-neutral-800
              pt-5
              text-center
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-neutral-500
                sm:text-xs
                md:text-sm
                md:tracking-[0.22em]
              "
            >
              Quality Charcoal
              <span className="mx-2 text-amber-500">•</span>
              Reliable Supply
              <span className="mx-2 text-amber-500">•</span>
              Trusted Service
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          OTHER HOME SECTIONS
      ========================================================== */}
      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <WhyChooseUs />
      </div>

      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <About />
      </div>

      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <ProductsSection />
      </div>

      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <WholesaleSection />
      </div>

      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <GallerySection />
      </div>

      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <FAQSection />
      </div>

      <div className="animate-[sectionReveal_0.65s_ease-out_both] motion-reduce:animate-none">
        <ContactSection />
      </div>

      {/* Small page-level reveal animation */}
      <style>{`
        @keyframes heroLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroRight {
          from {
            opacity: 0;
            transform: translateX(24px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes heroHeading {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroGlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.65;
          }
          50% {
            transform: translate(-15px, 15px) scale(1.06);
            opacity: 0.9;
          }
        }

        @keyframes heroGlowReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translate(15px, -15px) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes sectionReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

export default Home
