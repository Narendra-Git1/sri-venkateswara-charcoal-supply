import ContactActions from "../../components/contact/ContactActions"
import WhyChooseUs from "../../components/common/WhyChooseUs"
import ProductsSection from "../../components/products/ProductsSection"
import WholesaleSection from "../../components/wholesale/WholesaleSection"
import GallerySection from "../../components/gallery/GallerySection"
import FAQSection from "../../components/faq/FAQSection"
import ContactSection from "../../components/contact/ContactSection"
import About from "../About/About"

function Home() {
  const services = [
    {
      title: "Retail",
      description: "Household needs",
    },
    {
      title: "Wholesale",
      description: "Bulk supply",
    },
    {
      title: "Commercial",
      description: "Business needs",
    },
  ]

  const trustQuotes = [
    "Quality You Can Trust. Supply You Can Depend On.",
    "Bulk Supply. Reliable Service. Quality Charcoal.",
    "Quality Charcoal. Reliable Supply. Every Time.",
  ]

  return (
    <main>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-neutral-950 text-white">

        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-[420px]
            w-[420px]
            translate-x-1/4
            -translate-y-1/4
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
            bottom-0
            left-0
            h-[300px]
            w-[300px]
            -translate-x-1/3
            translate-y-1/3
            rounded-full
            bg-amber-500/5
            blur-3xl
            animate-[heroGlowReverse_10s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        {/* Small Decorative Line */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            hidden
            h-px
            w-32
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-amber-500/50
            to-transparent
            lg:block
          "
        />


        {/* =====================================================
            HERO CONTAINER
        ====================================================== */}

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">


            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                pt-1
                animate-[fadeInLeft_0.8s_ease-out]
                motion-reduce:animate-none
              "
            >

              {/* Badge */}

              <div
                className="
                  group
                  mb-4
                  inline-flex
                  cursor-default
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-amber-400/30
                  bg-amber-400/10
                  px-4
                  py-2
                  transition-all
                  duration-300
                  hover:border-amber-400/60
                  hover:bg-amber-400/15
                  hover:-translate-y-0.5
                "
              >

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-amber-400
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:shadow-[0_0_12px_rgba(251,191,36,0.9)]
                    animate-pulse
                    motion-reduce:animate-none
                  "
                />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Wholesale & Retail
                </span>

              </div>


              {/* Business Name */}

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-neutral-500
                  animate-[fadeInUp_0.7s_ease-out_0.1s_both]
                  motion-reduce:animate-none
                "
              >
                Sri Venkateswara Charcoal Supply
              </p>


              {/* Main Heading */}

              <h1
                className="
                  mt-3
                  max-w-2xl
                  text-4xl
                  font-extrabold
                  leading-[1.04]
                  tracking-tight
                  sm:text-5xl
                  lg:text-[3.7rem]
                  xl:text-[4rem]
                  animate-[fadeInUp_0.8s_ease-out_0.2s_both]
                  motion-reduce:animate-none
                "
              >

                Reliable Charcoal

                <span className="block text-amber-400">
                  Supply for Every
                </span>

                <span
                  className="
                    block
                    text-amber-400
                    animate-[textReveal_1s_ease-out_0.4s_both]
                    motion-reduce:animate-none
                  "
                >
                  Requirement
                </span>

              </h1>


              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-neutral-300
                  animate-[fadeInUp_0.8s_ease-out_0.35s_both]
                  motion-reduce:animate-none
                  sm:text-lg
                "
              >
                Quality charcoal solutions for household, commercial,
                cooking, BBQ and grounding requirements.
              </p>


              {/* =================================================
                  SERVICE CARDS
              ================================================== */}

              <div className="mt-6 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">

                {services.map((service, index) => (

                  <div
                    key={service.title}
                    className="
                      group
                      cursor-default
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900/70
                      p-3
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      hover:-translate-y-2
                      hover:border-amber-400/50
                      hover:bg-neutral-900
                      hover:shadow-xl
                      hover:shadow-amber-500/10
                      animate-[fadeInUp_0.6s_ease-out_both]
                      sm:p-4
                    "
                    style={{
                      animationDelay: `${0.5 + index * 0.12}s`,
                    }}
                  >

                    <div
                      className="
                        mb-3
                        h-1
                        w-6
                        rounded-full
                        bg-amber-500/50
                        transition-all
                        duration-500
                        group-hover:w-10
                        group-hover:bg-amber-400
                      "
                    />

                    <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                      {service.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                      {service.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* =================================================
                RIGHT CONTENT
            ================================================== */}

            <div
              className="
                relative
                animate-[fadeInRight_0.9s_ease-out_0.15s_both]
                motion-reduce:animate-none
              "
            >

              {/* Image Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-4
                  rounded-[2rem]
                  bg-amber-500/10
                  blur-3xl
                  transition-all
                  duration-700
                  animate-[imageGlow_6s_ease-in-out_infinite]
                  motion-reduce:animate-none
                "
              />


              {/* Image */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-neutral-800
                  bg-neutral-900
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:border-amber-400/30
                  hover:shadow-amber-500/10
                "
              >

                <img
                  src="/images/bbq-charcoal.jpg"
                  alt="Quality charcoal for BBQ and cooking"
                  className="
                    h-[270px]
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.05]
                    sm:h-[330px]
                    lg:h-[360px]
                  "
                />


                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-neutral-950
                    via-neutral-950/10
                    to-transparent
                  "
                />


                {/* Animated Image Shine */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-full
                    w-1/3
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-all
                    duration-1000
                    group-hover:left-[120%]
                  "
                />


                {/* Image Information */}

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-neutral-950/85
                      p-4
                      shadow-xl
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:border-amber-400/20
                    "
                  >

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-xs">
                      Sri Venkateswara Charcoal Supply
                    </p>

                    <p className="mt-1.5 text-sm font-bold text-white sm:text-base">
                      Cooking • BBQ • Commercial • Grounding
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  CONTACT ACTIONS
              ================================================== */}

              <div
                className="
                  mt-4
                  animate-[fadeInUp_0.7s_ease-out_0.7s_both]
                  motion-reduce:animate-none
                "
              >

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3

                    [&_a]:rounded-lg
                    [&_a]:border
                    [&_a]:border-neutral-700
                    [&_a]:bg-neutral-900
                    [&_a]:px-5
                    [&_a]:py-3
                    [&_a]:font-semibold
                    [&_a]:text-white
                    [&_a]:transition-all
                    [&_a]:duration-300

                    [&_a:hover]:-translate-y-1
                    [&_a:hover]:border-amber-400
                    [&_a:hover]:bg-amber-400
                    [&_a:hover]:text-neutral-950
                    [&_a:hover]:shadow-lg
                    [&_a:hover]:shadow-amber-500/20

                    [&_button]:rounded-lg
                    [&_button]:border
                    [&_button]:border-neutral-700
                    [&_button]:bg-neutral-900
                    [&_button]:px-5
                    [&_button]:py-3
                    [&_button]:font-semibold
                    [&_button]:text-white
                    [&_button]:transition-all
                    [&_button]:duration-300

                    [&_button:hover]:-translate-y-1
                    [&_button:hover]:border-amber-400
                    [&_button:hover]:bg-amber-400
                    [&_button:hover]:text-neutral-950
                    [&_button:hover]:shadow-lg
                    [&_button:hover]:shadow-amber-500/20
                  "
                >
                  <ContactActions />
                </div>

              </div>


              {/* =================================================
                  PROFESSIONAL TRUST QUOTES
              ================================================== */}

              <div className="mt-6 grid gap-3 sm:grid-cols-3">

                {trustQuotes.map((quote, index) => (

                  <div
                    key={quote}
                    className="
                      group
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900/60
                      p-4
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      hover:-translate-y-2
                      hover:border-amber-400/40
                      hover:bg-neutral-900
                      hover:shadow-lg
                      hover:shadow-amber-500/10
                      animate-[fadeInUp_0.6s_ease-out_both]
                    "
                    style={{
                      animationDelay: `${0.9 + index * 0.12}s`,
                    }}
                  >

                    <div
                      className="
                        mb-3
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-400/10
                        text-amber-400
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                        group-hover:bg-amber-400
                        group-hover:text-neutral-950
                      "
                    >
                      <span className="text-lg font-bold">
                        “
                      </span>
                    </div>


                    <p className="text-xs font-medium leading-5 text-neutral-300 sm:text-sm">
                      {quote}
                    </p>

                  </div>

                ))}

              </div>


              {/* Trust Line */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  animate-[fadeInUp_0.7s_ease-out_1.2s_both]
                  motion-reduce:animate-none
                "
              >

                <div className="h-px flex-1 bg-neutral-800" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Trusted Charcoal Supply
                </p>

                <div className="h-px flex-1 bg-neutral-800" />

              </div>

            </div>

          </div>

        </div>


        {/* Scroll Indicator */}

        <div
          className="
            absolute
            bottom-3
            left-1/2
            hidden
            -translate-x-1/2
            lg:block
            motion-reduce:animate-none
          "
        >
          <div className="flex flex-col items-center gap-1 text-neutral-600">

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
              Explore
            </span>

            <span className="h-5 w-px bg-gradient-to-b from-amber-500/60 to-transparent animate-pulse motion-reduce:animate-none" />

          </div>
        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <WhyChooseUs />
      </div>


      {/* =========================================================
          ABOUT
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <About />
      </div>


      {/* =========================================================
          PRODUCTS
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <ProductsSection />
      </div>


      {/* =========================================================
          WHOLESALE & RETAIL
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <WholesaleSection />
      </div>


      {/* =========================================================
          GALLERY
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <GallerySection />
      </div>


      {/* =========================================================
          FAQ
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <FAQSection />
      </div>


      {/* =========================================================
          CONTACT
      ========================================================== */}

      <div className="animate-[fadeInUp_0.8s_ease-out] motion-reduce:animate-none">
        <ContactSection />
      </div>


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
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
            letter-spacing: 0.02em;
          }

          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: normal;
          }
        }

        @keyframes heroGlow {
          0%,
          100% {
            transform: translate(25%, -25%) scale(1);
          }

          50% {
            transform: translate(15%, -15%) scale(1.08);
          }
        }

        @keyframes heroGlowReverse {
          0%,
          100% {
            transform: translate(-33%, 33%) scale(1);
          }

          50% {
            transform: translate(-20%, 20%) scale(1.08);
          }
        }

        @keyframes imageGlow {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.04);
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