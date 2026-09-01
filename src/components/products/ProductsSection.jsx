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
          animate-[productGlow_9s_ease-in-out_infinite]
          motion-reduce:animate-none
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
          animate-[productGlowReverse_11s_ease-in-out_infinite]
          motion-reduce:animate-none
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

          <div className="mb-4 flex items-center justify-center gap-3">

            <span
              className="
                h-px
                w-8
                origin-right
                bg-amber-500
                animate-[scaleLine_0.7s_ease-out]
                sm:w-10
                motion-reduce:animate-none
              "
            />

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

            <span
              className="
                h-px
                w-8
                origin-left
                bg-amber-500
                animate-[scaleLine_0.7s_ease-out]
                sm:w-10
                motion-reduce:animate-none
              "
            />

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

            <span
              className="
                block
                text-amber-500
                animate-[titleReveal_0.8s_ease-out_0.2s_both]
                motion-reduce:animate-none
              "
            >
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
              animate-[fadeInUp_0.8s_ease-out_0.3s_both]
              motion-reduce:animate-none
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

          {products.map((product, index) => (

            <div
              key={product.id}
              className="
                group/product
                flex
                h-full
                opacity-0
                animate-[productCardIn_0.7s_ease-out_both]
                motion-reduce:animate-none
              "
              style={{
                animationDelay: `${0.25 + index * 0.12}s`,
              }}
            >

              <div
                className="
                  flex
                  h-full
                  w-full
                  transition-all
                  duration-500
                  ease-out
                  group-hover/product:-translate-y-2
                  group-hover/product:scale-[1.01]
                  motion-reduce:transition-none
                "
              >
                <ProductCard product={product} />
              </div>

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
            opacity-0
            animate-[fadeInUp_0.8s_ease-out_0.75s_both]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-amber-300/60
            hover:shadow-lg
            hover:shadow-neutral-900/5
            motion-reduce:animate-none
            motion-reduce:transition-none
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
                    transition-all
                    duration-500
                    hover:h-12
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
                hover:text-neutral-950

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
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:scale-110
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
            opacity-0
            animate-[fadeInUp_0.7s_ease-out_0.95s_both]
            motion-reduce:animate-none
          "
        >

          <span
            className="
              h-px
              w-8
              bg-neutral-200
              transition-all
              duration-500
              hover:w-14
              sm:w-12
            "
          />

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

          <span
            className="
              h-px
              w-8
              bg-neutral-200
              transition-all
              duration-500
              hover:w-14
              sm:w-12
            "
          />

        </div>

      </div>


      {/* =========================================================
          PROFESSIONAL ANIMATION KEYFRAMES
      ========================================================== */}

      <style>{`

        /* ---------------------------------------------
           Section entrance
        --------------------------------------------- */

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


        /* ---------------------------------------------
           Product card entrance
        --------------------------------------------- */

        @keyframes productCardIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        /* ---------------------------------------------
           Heading reveal
        --------------------------------------------- */

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ---------------------------------------------
           Decorative line
        --------------------------------------------- */

        @keyframes scaleLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }


        /* ---------------------------------------------
           Background glow
        --------------------------------------------- */

        @keyframes productGlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }

          50% {
            transform: translate(-25px, 20px) scale(1.08);
            opacity: 1;
          }
        }


        @keyframes productGlowReverse {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }

          50% {
            transform: translate(25px, -20px) scale(1.08);
            opacity: 0.9;
          }
        }


        /* ---------------------------------------------
           Reduced motion accessibility
        --------------------------------------------- */

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

    </section>
  )
}

export default ProductsSection