const galleryImages = [
  // =========================================================
  // PRODUCT IMAGES
  // =========================================================

  {
    id: "iron-charcoal",
    name: "Iron Charcoal",
    category: "Industrial & Commercial",
    image: "/images/iron-charcoal.jpg",
  },

  {
    id: "grounding-charcoal",
    name: "Grounding Charcoal",
    category: "Grounding Applications",
    image: "/images/grounding-charcoal.jpg",
  },

  {
    id: "tandoor-charcoal",
    name: "Tandoor Charcoal",
    category: "Cooking Applications",
    image: "/images/tandoor-charcoal.jpg",
  },

  {
    id: "bbq-charcoal",
    name: "BBQ Charcoal",
    category: "BBQ & Cooking",
    image: "/images/bbq-charcoal.jpg",
  },


  // =========================================================
  // REAL BUSINESS / GALLERY IMAGES
  // =========================================================

  {
    id: "charcoal-production",
    name: "Charcoal Production",
    category: "Our Supply Process",
    image: "/images/charcoal-production.jpg",
  },

  {
    id: "charcoal-loading",
    name: "Bulk Charcoal Loading",
    category: "Bulk Supply",
    image: "/images/charcoal-loading.jpg",
  },

  {
    id: "charcoal-stock-yard",
    name: "Charcoal Stock Yard",
    category: "Charcoal Stock",
    image: "/images/charcoal-stock-yard.jpg",
  },

  {
    id: "charcoal-processing",
    name: "Charcoal Processing",
    category: "Our Supply Process",
    image: "/images/charcoal-processing.jpg",
  },

  {
    id: "charcoal-bagging",
    name: "Charcoal Bagging",
    category: "Packing & Supply",
    image: "/images/charcoal-bagging.jpg",
  },

  {
    id: "charcoal-bbq",
    name: "Charcoal for BBQ",
    category: "BBQ & Cooking",
    image: "/images/charcoal-bbq.jpg",
  },

  {
    id: "charcoal-team",
    name: "Our Team",
    category: "Our Business",
    image: "/images/charcoal-team.jpg",
  },

  {
    id: "charcoal-business",
    name: "Our Charcoal Business",
    category: "Our Business",
    image: "/images/charcoal-business.jpg",
  },

  {
    id: "charcoal-raw-stock",
    name: "Raw Charcoal Stock",
    category: "Charcoal Stock",
    image: "/images/charcoal-raw-stock.jpg",
  },

  {
    id: "charcoal-lumps",
    name: "Charcoal Lumps",
    category: "Charcoal Stock",
    image: "/images/charcoal-lumps.jpg",
  },

  {
    id: "charcoal-storage",
    name: "Charcoal Storage",
    category: "Storage & Supply",
    image: "/images/charcoal-storage.jpg",
  },

  {
    id: "charcoal-bulk-stock",
    name: "Bulk Charcoal Supply",
    category: "Wholesale Supply",
    image: "/images/charcoal-bulk-stock.jpg",
  },
]


function Gallery() {
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

        {/* Background Glow */}

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
            animate-[galleryGlow_8s_ease-in-out_infinite]
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
            animate-[galleryGlowReverse_10s_ease-in-out_infinite]
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
            bg-amber-500
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
              animate-[fadeInUp_0.7s_ease-out]
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
                animate-[fadeInUp_0.6s_ease-out_0.1s_both]
                motion-reduce:animate-none
              "
            >

              <span className="h-px w-10 bg-amber-500" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-amber-400
                "
              >
                Gallery
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
                animate-[titleReveal_0.7s_ease-out_0.15s_both]
                motion-reduce:animate-none
              "
            >
              Our Charcoal Products

              <span
                className="
                  block
                  text-amber-400
                  animate-[titleReveal_0.7s_ease-out_0.3s_both]
                  motion-reduce:animate-none
                "
              >
                Quality You Can See
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
                animate-[fadeInUp_0.7s_ease-out_0.4s_both]
                motion-reduce:animate-none
              "
            >
              Explore our charcoal products, stock, supply activities
              and real business images from our charcoal operations.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          GALLERY
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
            animate-[galleryGlow_12s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


          {/* =====================================================
              GALLERY HEADER
          ====================================================== */}

          <div
            className="
              mb-10
              flex
              items-end
              justify-between
              gap-6
              opacity-0
              animate-[fadeInUp_0.7s_ease-out_0.1s_both]
              motion-reduce:animate-none
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-amber-600
                "
              >
                Our Gallery
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
                Products & Business
              </h2>

            </div>


            <div className="hidden items-center gap-2 sm:flex">

              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-neutral-400
                "
              >
                {galleryImages.length} Images
              </span>

            </div>

          </div>


          {/* =====================================================
              GALLERY GRID
          ====================================================== */}

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {galleryImages.map((item, index) => (

              <article
                key={item.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  shadow-sm
                  opacity-0
                  animate-[cardReveal_0.55s_ease-out_both]
                  transition-all
                  duration-400
                  hover:-translate-y-2
                  hover:border-amber-400/60
                  hover:shadow-xl
                  hover:shadow-neutral-900/10
                  motion-reduce:animate-none
                  motion-reduce:transition-none
                "
                style={{
                  animationDelay: `${0.15 + index * 0.07}s`,
                }}
              >

                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-2xl
                    bg-amber-500/0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:bg-amber-500/10
                  "
                />


                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-neutral-100
                  "
                >

                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />


                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-neutral-950/85
                      via-neutral-950/10
                      to-transparent
                      opacity-50
                      transition-opacity
                      duration-500
                      group-hover:opacity-90
                    "
                  />


                  {/* Number */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-neutral-950/70
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-amber-400
                      group-hover:bg-amber-500
                      group-hover:text-neutral-950
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* Category */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      translate-y-2
                      opacity-80
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-amber-300
                      "
                    >
                      {item.category}
                    </p>

                  </div>

                </div>


                {/* =================================================
                    INFORMATION
                ================================================== */}

                <div className="relative p-5">

                  <div className="flex items-center justify-between gap-3">

                    <h3
                      className="
                        text-lg
                        font-bold
                        text-neutral-950
                        transition-colors
                        duration-300
                        group-hover:text-amber-600
                      "
                    >
                      {item.name}
                    </h3>


                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-neutral-100
                        text-sm
                        text-neutral-500
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:bg-amber-500
                        group-hover:text-neutral-950
                      "
                    >
                      →
                    </span>

                  </div>


                  {/* Animated Accent */}

                  <div
                    className="
                      mt-4
                      h-1
                      w-8
                      rounded-full
                      bg-amber-500
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                </div>

              </article>

            ))}

          </div>


          {/* =====================================================
              BUSINESS GALLERY INFORMATION
          ====================================================== */}

          <div
            className="
              mt-12
              rounded-3xl
              bg-neutral-950
              px-6
              py-10
              text-center
              text-white
              opacity-0
              animate-[fadeInUp_0.7s_ease-out_1.2s_both]
              sm:px-10
              sm:py-12
              motion-reduce:animate-none
            "
          >

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-amber-400
              "
            >
              From Our Business
            </p>


            <h2
              className="
                mt-3
                text-2xl
                font-bold
                tracking-tight
                sm:text-3xl
              "
            >
              From Charcoal Stock to Customer Supply
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-neutral-400
                sm:text-base
              "
            >
              These images represent our charcoal stock, handling,
              packing, bulk supply and day-to-day business activities.
            </p>


            {/* Trust Points */}

            <div
              className="
                mx-auto
                mt-8
                flex
                max-w-3xl
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >

              <span
                className="
                  rounded-full
                  border
                  border-neutral-700
                  bg-neutral-900
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-neutral-300
                "
              >
                Quality Charcoal
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-neutral-700
                  bg-neutral-900
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-neutral-300
                "
              >
                Bulk Supply
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-neutral-700
                  bg-neutral-900
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-neutral-300
                "
              >
                Retail Supply
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-neutral-700
                  bg-neutral-900
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-neutral-300
                "
              >
                Commercial Supply
              </span>

            </div>

          </div>


          {/* =====================================================
              BOTTOM CTA
          ====================================================== */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              opacity-0
              animate-[fadeInUp_0.7s_ease-out_1.4s_both]
              motion-reduce:animate-none
            "
          >

            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-neutral-950
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-amber-500
                hover:text-neutral-950
                hover:shadow-xl
                hover:shadow-amber-500/20
              "
            >

              <span>
                Discuss Your Requirement
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>

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
              animate-[fadeInUp_0.7s_ease-out_1.5s_both]
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
          ANIMATIONS
      ========================================================== */}

      <style>{`

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
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
            opacity: 0;
            transform: translateX(-50%) scaleX(0);
          }

          to {
            opacity: 1;
            transform: translateX(-50%) scaleX(1);
          }
        }


        @keyframes galleryGlow {

          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }

          50% {
            transform: translate(20px, 15px) scale(1.08);
            opacity: 1;
          }
        }


        @keyframes galleryGlowReverse {

          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translate(-20px, -15px) scale(1.08);
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

export default Gallery