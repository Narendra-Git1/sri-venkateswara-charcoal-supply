import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import { products } from "../../data/products"

function ProductsSection() {
  return (
    <section
      id="products"
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
          -right-48
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-neutral-900/5
          blur-3xl
        "
      />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >


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
              Our Products
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
            Charcoal Products

            <span className="block text-amber-500">
              for Every Requirement
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
            Quality charcoal products for household, cooking, BBQ,
            commercial and grounding requirements.
          </p>

        </div>


        {/* =========================================================
            PRODUCT GRID
        ========================================================== */}

        <div
          className="
            mt-10
            grid
            auto-rows-fr
            gap-6
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-4
          "
        >

          {products.map((product) => (
            <div
              key={product.id}
              className="flex h-full"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>


        {/* =========================================================
            ENQUIRY STRIP
        ========================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-neutral-200
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:border-neutral-300
            hover:shadow-md
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            {/* -----------------------------------------------------
                ENQUIRY CONTENT
            ------------------------------------------------------ */}

            <div className="px-6 py-5 sm:px-8 sm:py-6">

              <div className="flex items-start gap-3">

                {/* Accent */}

                <div
                  className="
                    mt-1
                    h-9
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
                    Looking for a specific charcoal requirement?
                  </h3>

                  <p
                    className="
                      mt-1
                      max-w-xl
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

            </div>


            {/* -----------------------------------------------------
                ENQUIRE BUTTON
            ------------------------------------------------------ */}

            <Link
              to="/contact"
              className="
                group
                flex
                shrink-0
                items-center
                justify-center
                gap-2
                border-t
                border-neutral-200
                px-6
                py-5
                text-sm
                font-bold
                text-neutral-950
                transition-all
                duration-300

                hover:bg-amber-500

                md:border-l
                md:border-t-0
                md:px-8
              "
            >

              <span>
                Enquire Now
              </span>

              <span
                aria-hidden="true"
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </div>

        </div>


        {/* =========================================================
            TRUST LINE
        ========================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-3
          "
        >

          <span className="h-px w-8 bg-neutral-200 sm:w-12" />

          <p
            className="
              text-center
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
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

export default ProductsSection