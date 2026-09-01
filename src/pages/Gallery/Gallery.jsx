const galleryImages = [
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
]

function Gallery() {
  return (
    <main className="bg-white">

      {/* =========================================================
          GALLERY HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-24">

        {/* Background Accents */}

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
          "
        />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            {/* Eyebrow */}

            <div className="mb-5 flex items-center justify-center gap-3">

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
              "
            >
              Our Charcoal Products

              <span className="block text-amber-400">
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
              "
            >
              Explore our range of charcoal products for cooking,
              BBQ, commercial and grounding requirements.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          GALLERY
      ========================================================== */}

      <section className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24">

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
          "
        />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


          {/* =====================================================
              GALLERY HEADER
          ====================================================== */}

          <div className="mb-10 flex items-end justify-between gap-6">

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
                Product Collection
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
                Explore Our Range
              </h2>

            </div>


            <div className="hidden items-center gap-2 sm:flex">

              <span className="h-2 w-2 rounded-full bg-amber-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                4 Product Categories
              </span>

            </div>

          </div>


          {/* =====================================================
              PRODUCT GALLERY GRID
          ====================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-amber-400/60
                  hover:shadow-xl
                  hover:shadow-neutral-900/10
                "
              >

                {/* Image */}

                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">

                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />


                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-neutral-950/80
                      via-neutral-950/10
                      to-transparent
                      opacity-70
                      transition-opacity
                      duration-300
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
                    "
                  >
                    0{index + 1}
                  </div>


                  {/* Category */}

                  <div className="absolute bottom-4 left-4 right-4">

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


                {/* Product Information */}

                <div className="p-5">

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
                        duration-300
                        group-hover:bg-amber-500
                        group-hover:text-neutral-950
                      "
                    >
                      →
                    </span>

                  </div>

                  <div className="mt-4 h-1 w-8 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-12" />

                </div>

              </article>
            ))}

          </div>


          {/* =====================================================
              BOTTOM INFORMATION STRIP
          ====================================================== */}

          <div
            className="
              mt-10
              overflow-hidden
              rounded-2xl
              border
              border-neutral-200
              bg-white
              shadow-sm
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
                px-6
                py-6
                sm:px-8
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                    mt-1
                    h-8
                    w-1
                    shrink-0
                    rounded-full
                    bg-amber-500
                  "
                />

                <div>

                  <h3 className="text-sm font-bold text-neutral-950 sm:text-base">
                    Looking for a specific charcoal product?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                    Contact us to discuss product type, quantity
                    and supply requirements.
                  </p>

                </div>

              </div>


              <a
                href="/contact"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-neutral-950
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-amber-500
                  hover:text-neutral-950
                  hover:shadow-lg
                  hover:shadow-amber-500/20
                "
              >
                Enquire Now

                <span>
                  →
                </span>

              </a>

            </div>

          </div>


          {/* =====================================================
              TRUST LINE
          ====================================================== */}

          <div className="mt-8 flex items-center justify-center gap-3">

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

    </main>
  )
}

export default Gallery