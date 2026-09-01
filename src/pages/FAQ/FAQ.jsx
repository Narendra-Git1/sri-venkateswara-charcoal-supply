import { useState } from "react"

const faqs = [
  {
    question: "What types of charcoal do you supply?",
    answer:
      "We supply charcoal for iron heating, electrical grounding, tandoor cooking, BBQ and other requirements.",
  },
  {
    question: "Do you provide wholesale quantities?",
    answer:
      "Yes. We support bulk and commercial requirements. Customers can enquire with their quantity and requirement.",
  },
  {
    question: "Can I purchase charcoal for household use?",
    answer:
      "Yes. Retail supply is available for household, cooking and BBQ requirements.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "You can contact us through the enquiry options provided on the website.",
  },
  {
    question: "Do you provide delivery?",
    answer:
      "Delivery availability and service areas can be confirmed directly with us based on the requirement.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <main className="bg-neutral-50">

      {/* =========================================================
          FAQ HERO
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

        {/* Background Accents */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-amber-500/10
            blur-3xl
            animate-[faqGlow_6s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-40
            h-96
            w-96
            rounded-full
            bg-amber-500/5
            blur-3xl
            animate-[faqGlowReverse_7s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            {/* Eyebrow */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-3
                animate-[fadeUp_0.4s_ease-out_both]
                motion-reduce:animate-none
              "
            >

              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                FAQ
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
                animate-[fadeUp_0.45s_ease-out_0.05s_both]
                motion-reduce:animate-none
              "
            >
              Frequently Asked Questions

              <span className="block text-amber-400">
                Everything You Need to Know
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
                animate-[fadeUp_0.45s_ease-out_0.1s_both]
                motion-reduce:animate-none
              "
            >
              Find answers to common questions about our charcoal
              products, supply options and enquiries.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ CONTENT
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

        {/* Background Accent */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
            h-80
            w-80
            rounded-full
            bg-amber-500/5
            blur-3xl
            animate-[faqGlow_8s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">


          {/* Section Intro */}

          <div
            className="
              mb-10
              text-center
              animate-[fadeUp_0.45s_ease-out_both]
              motion-reduce:animate-none
            "
          >

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Help Centre
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                tracking-tight
                text-neutral-950
                sm:text-3xl
              "
            >
              Common Questions
            </h2>

          </div>


          {/* =====================================================
              FAQ ACCORDION
          ====================================================== */}

          <div className="space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index

              return (
                <article
                  key={faq.question}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white
                    opacity-0
                    animate-[faqCard_0.4s_ease-out_both]
                    transition-all
                    duration-300
                    motion-reduce:animate-none
                    ${
                      isOpen
                        ? "border-amber-400/60 shadow-lg shadow-neutral-900/5"
                        : "border-neutral-200 shadow-sm hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
                    }
                  `}
                  style={{
                    animationDelay: `${0.12 + index * 0.06}s`,
                  }}
                >

                  {/* Question Button */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      sm:px-7
                      sm:py-6
                    "
                  >

                    <div className="flex items-center gap-4">

                      {/* Number */}

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-xs
                          font-bold
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "scale-105 bg-amber-500 text-neutral-950"
                              : "bg-neutral-100 text-neutral-500 group-hover:bg-amber-500/10 group-hover:text-amber-600"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>


                      {/* Question */}

                      <span
                        className={`
                          text-sm
                          font-bold
                          transition-colors
                          duration-200
                          sm:text-base
                          ${
                            isOpen
                              ? "text-amber-600"
                              : "text-neutral-950 group-hover:text-amber-600"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                    </div>


                    {/* Plus / Minus */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-xl
                        font-light
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-45 border-amber-500 bg-amber-500 text-neutral-950"
                            : "border-neutral-200 bg-neutral-50 text-neutral-500 group-hover:border-amber-400 group-hover:text-amber-600"
                        }
                      `}
                    >
                      +
                    </span>

                  </button>


                  {/* Answer */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-neutral-100 px-5 pb-6 pt-5 sm:px-7">

                        <div
                          className={`
                            ml-0
                            border-l-2
                            border-amber-500/40
                            pl-4
                            transition-transform
                            duration-300
                            sm:ml-[52px]
                            ${
                              isOpen
                                ? "translate-x-0"
                                : "-translate-x-2"
                            }
                          `}
                        >

                          <p className="text-sm leading-7 text-neutral-600">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>
              )
            })}

          </div>


          {/* =====================================================
              CONTACT CTA
          ====================================================== */}

          <div
            className="
              relative
              mt-10
              overflow-hidden
              rounded-2xl
              bg-neutral-950
              px-6
              py-7
              text-white
              shadow-xl
              sm:px-8
              opacity-0
              animate-[fadeUp_0.45s_ease-out_0.55s_both]
              motion-reduce:animate-none
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-amber-500/10
                blur-3xl
              "
            />


            <div
              className="
                relative
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                  Still Have Questions?
                </p>

                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  We're happy to discuss your requirement.
                </h3>

                <p className="mt-1 text-sm text-neutral-400">
                  Contact us for product details, quantities and
                  supply enquiries.
                </p>

              </div>


              <a
                href="/contact"
                className="
                  group/contact
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-amber-500
                  px-5
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
                Contact Us

                <span
                  className="
                    transition-transform
                    duration-200
                    group-hover/contact:translate-x-1
                  "
                >
                  →
                </span>

              </a>

            </div>

          </div>


          {/* =====================================================
              TRUST LINE
          ====================================================== */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-3
              opacity-0
              animate-[fadeUp_0.4s_ease-out_0.65s_both]
              motion-reduce:animate-none
            "
          >

            <span className="h-px w-8 bg-neutral-200 sm:w-12" />

            <p
              className="
                text-center
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-neutral-400
                sm:text-[10px]
              "
            >
              Quality Charcoal

              <span className="mx-2 text-amber-500">
                •
              </span>

              Reliable Supply

              <span className="mx-2 text-amber-500">
                •
              </span>

              Wholesale & Retail
            </p>

            <span className="h-px w-8 bg-neutral-200 sm:w-12" />

          </div>

        </div>

      </section>


      {/* =========================================================
          FAST PROFESSIONAL ANIMATIONS
      ========================================================== */}

      <style>{`

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes faqCard {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes faqGlow {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(12px, 8px);
          }
        }

        @keyframes faqGlowReverse {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-12px, -8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

      `}</style>

    </main>
  )
}

export default FAQ