import { Link } from "react-router-dom"

const retailItems = [
  "Household requirements",
  "Cooking requirements",
  "BBQ requirements",
]

const wholesaleItems = [
  "Bulk requirements",
  "Commercial requirements",
  "Business enquiries",
]

function WholesaleSection() {
  return (
    <section
      id="wholesale"
      className="
        relative
        overflow-hidden
        bg-white
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
          -left-40
          top-20
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
          -right-40
          bottom-0
          h-80
          w-80
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
            HEADER
        ========================================================== */}

        <div className="mx-auto max-w-3xl text-center">

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
              Wholesale & Retail
            </span>

            <span className="h-px w-8 bg-amber-500 sm:w-10" />

          </div>


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
            Charcoal Supply

            <span className="block text-amber-500">
              for Every Requirement
            </span>
          </h2>


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
            Flexible charcoal supply options for individual customers,
            businesses and larger quantity requirements.
          </p>

        </div>


        {/* =========================================================
            RETAIL + WHOLESALE CARDS
        ========================================================== */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:mt-12">


          {/* =======================================================
              RETAIL
          ======================================================== */}

          <article
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-neutral-200
              bg-neutral-50
              p-7
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:border-amber-400/60
              hover:bg-white
              hover:shadow-xl
              hover:shadow-neutral-900/10
              sm:p-9
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


            {/* Header */}

            <div className="flex items-start justify-between">

              <div>

                <span
                  className="
                    text-5xl
                    font-black
                    tracking-tight
                    text-neutral-200
                    transition-colors
                    duration-300
                    group-hover:text-amber-500/10
                  "
                >
                  01
                </span>

              </div>


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
                  bg-white
                  text-lg
                  font-black
                  text-neutral-900
                  transition-all
                  duration-300
                  group-hover:border-amber-500
                  group-hover:bg-amber-500
                "
              >
                R
              </div>

            </div>


            {/* Title */}

            <h3
              className="
                mt-6
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
            </h3>


            {/* Description */}

            <p className="mt-4 leading-7 text-neutral-600">
              Suitable for customers who require charcoal for
              household, cooking, BBQ and other individual needs.
            </p>


            {/* Requirements */}

            <div className="mt-7">

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                Suitable For
              </p>

              <div className="mt-4 space-y-3">

                {retailItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
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
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-neutral-950
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-amber-500
                hover:text-neutral-950
              "
            >

              Enquire for Retail

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </article>


          {/* =======================================================
              WHOLESALE
          ======================================================== */}

          <article
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-neutral-950
              p-7
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:shadow-2xl
              hover:shadow-amber-500/10
              sm:p-9
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
                  transition-colors
                  duration-300
                  group-hover:text-amber-500/20
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
                  duration-300
                  group-hover:border-amber-500
                  group-hover:bg-amber-500
                  group-hover:text-neutral-950
                "
              >
                W
              </div>

            </div>


            {/* Title */}

            <h3
              className="
                relative
                mt-6
                text-2xl
                font-bold
                transition-colors
                duration-300
                group-hover:text-amber-400
                sm:text-3xl
              "
            >
              Wholesale Supply
            </h3>


            {/* Description */}

            <p className="relative mt-4 leading-7 text-neutral-400">
              Suitable for businesses and customers requiring
              charcoal in larger quantities for ongoing requirements.
            </p>


            {/* Requirements */}

            <div className="relative mt-7">

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                "
              >
                Suitable For
              </p>

              <div className="mt-4 space-y-3">

                {wholesaleItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
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
                relative
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-amber-500
                px-6
                py-3
                text-sm
                font-bold
                text-neutral-950
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-amber-400
                hover:shadow-lg
                hover:shadow-amber-500/20
              "
            >

              Enquire for Wholesale

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </article>

        </div>


        {/* =========================================================
            DETAILS CTA
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

            <div>

              <p className="text-sm font-bold text-neutral-950 sm:text-base">
                Need a larger charcoal supply?
              </p>

              <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                Contact us with your product type and quantity
                to discuss your requirement.
              </p>

            </div>


            <Link
              to="/wholesale-retail"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-lg
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
                hover:border-amber-500
                hover:bg-amber-500
              "
            >
              View Details
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* =========================================================
            TRUST LINE
        ========================================================== */}

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
            Retail
            <span className="mx-2 text-amber-500">•</span>
            Wholesale
            <span className="mx-2 text-amber-500">•</span>
            Commercial
            <span className="mx-2 text-amber-500">•</span>
            Reliable Supply
          </p>

          <span className="h-px w-8 bg-neutral-200 sm:w-12" />

        </div>

      </div>

    </section>
  )
}

export default WholesaleSection