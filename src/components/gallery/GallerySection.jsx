const galleryImages = [
  {
    id: "iron-charcoal",
    name: "Iron Charcoal",
    category: "Industrial & Commercial",
    src: "/images/iron-charcoal.jpg",
    alt: "Iron Charcoal for industrial and commercial use",
  },
  {
    id: "grounding-charcoal",
    name: "Grounding Charcoal",
    category: "Grounding Applications",
    src: "/images/grounding-charcoal.jpg",
    alt: "Grounding Charcoal for grounding applications",
  },
  {
    id: "tandoor-charcoal",
    name: "Tandoor Charcoal",
    category: "Cooking Applications",
    src: "/images/tandoor-charcoal.jpg",
    alt: "Tandoor Charcoal for cooking applications",
  },
  {
    id: "bbq-charcoal",
    name: "BBQ Charcoal",
    category: "BBQ & Cooking",
    src: "/images/bbq-charcoal.jpg",
    alt: "BBQ Charcoal for BBQ and cooking",
  },
]

function GallerySection() {
  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-neutral-50
        py-16
        sm:py-20
        lg:py-24
      "
    >

      {/* =========================================================
          BACKGROUND ACCENTS
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-72
          w-72
          rounded-full
          bg-neutral-950/5
          blur-3xl
        "
      />


      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* =========================================================
            SECTION HEADER
        ========================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-amber-500 sm:w-10" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-amber-600
              "
            >
              Gallery
            </span>

            <span className="h-px w-8 bg-amber-500 sm:w-10" />

          </div>


          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-neutral-950
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our Charcoal Products

            <span className="block text-amber-500">
              Quality You Can See
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-neutral-600
              sm:text-base
              sm:leading-7
            "
          >
            Explore our charcoal products for cooking, BBQ,
            commercial and grounding requirements.
          </p>

        </div>


        {/* =========================================================
            GALLERY GRID
        ========================================================== */}

        <div
          className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-4
          "
        >

          {galleryImages.map((image, index) => (
            <article
              key={image.id}
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

              {/* ===================================================
                  IMAGE
              ==================================================== */}

              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">

                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
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
                    from-neutral-950/75
                    via-transparent
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
                    left-3
                    top-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-neutral-950/70
                    text-[10px]
                    font-bold
                    text-white
                    backdrop-blur-sm
                  "
                >
                  0{index + 1}
                </div>


                {/* Category */}

                <div className="absolute bottom-3 left-4 right-4">

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-amber-300
                    "
                  >
                    {image.category}
                  </p>

                </div>

              </div>


              {/* ===================================================
                  PRODUCT INFORMATION
              ==================================================== */}

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
                    {image.name}
                  </h3>


                  {/* Arrow */}

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


                {/* Accent */}

                <div
                  className="
                    mt-3
                    h-1
                    w-7
                    rounded-full
                    bg-amber-500
                    transition-all
                    duration-300
                    group-hover:w-12
                  "
                />

              </div>

            </article>
          ))}

        </div>


        {/* =========================================================
            GALLERY CTA
        ========================================================== */}

        <div
          className="
            mt-8
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

            {/* Left */}

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

                <h3
                  className="
                    text-sm
                    font-bold
                    text-neutral-950
                    sm:text-base
                  "
                >
                  Looking for a specific charcoal product?
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-neutral-500
                    sm:text-sm
                  "
                >
                  Contact us to discuss product type, quantity
                  and supply requirements.
                </p>

              </div>

            </div>


            {/* Button */}

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

        </div>


        {/* =========================================================
            TRUST LINE
        ========================================================== */}

        <div className="mt-7 flex items-center justify-center gap-3">

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
  )
}

export default GallerySection