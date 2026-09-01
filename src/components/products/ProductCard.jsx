import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-neutral-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-amber-200
        hover:shadow-xl
        hover:shadow-neutral-900/10
      "
    >
      {/* =====================================================
          PRODUCT IMAGE
      ====================================================== */}

      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
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
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-neutral-950/30
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Product Badge */}

        <div
          className="
            absolute
            left-3
            top-3
            rounded-full
            border
            border-white/20
            bg-neutral-950/80
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-white
            shadow-lg
            backdrop-blur-sm
            sm:left-4
            sm:top-4
          "
        >
          Charcoal
        </div>
      </div>

      {/* =====================================================
          PRODUCT CONTENT
      ====================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
          sm:p-6
          lg:p-7
        "
      >
        {/* Small Accent */}

        <div className="mb-4 flex items-center gap-2">
          <span
            className="
              h-1
              w-7
              rounded-full
              bg-amber-500
              transition-all
              duration-300
              group-hover:w-10
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-neutral-400
            "
          >
            Quality Supply
          </span>
        </div>

        {/* Product Name */}

        <h3
          className="
            text-lg
            font-bold
            leading-tight
            text-neutral-950
            transition-colors
            duration-300
            group-hover:text-amber-700
            sm:text-xl
          "
        >
          {product.name}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-neutral-600
          "
        >
          {product.shortDescription}
        </p>

        {/* =================================================
            PRODUCT LINK
        ================================================== */}

        <div className="mt-auto pt-6 sm:pt-7">
          <Link
            to={`/products/${product.id}`}
            className="
              group/link
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-amber-200
              bg-amber-50
              px-4
              py-3
              text-sm
              font-bold
              text-amber-800
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-amber-300
              hover:bg-amber-100
              hover:text-amber-900
              hover:shadow-md
              hover:shadow-amber-500/10
              active:translate-y-0
              sm:w-auto
              sm:justify-start
            "
          >
            <span>
              View Product
            </span>

            <span
              aria-hidden="true"
              className="
                text-base
                font-bold
                transition-transform
                duration-300
                group-hover/link:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
