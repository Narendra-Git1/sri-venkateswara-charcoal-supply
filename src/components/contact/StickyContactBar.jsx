import { business } from "../../data/business"

function StickyContactBar() {
  const hasContactActions =
    business.phone ||
    business.whatsapp ||
    business.directionsUrl

  if (!hasContactActions) {
    return null
  }

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-neutral-200
        bg-white/95
        px-3
        py-2.5
        shadow-[0_-8px_30px_rgba(0,0,0,0.10)]
        backdrop-blur-md
        lg:hidden
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-lg
          grid-cols-3
          gap-2
        "
      >

        {/* =========================================================
            CALL
        ========================================================== */}

        {business.phone && (
          <a
            href={`tel:${business.phone}`}
            className="
              group
              flex
              min-h-[44px]
              items-center
              justify-center
              gap-1.5
              rounded-xl
              bg-neutral-950
              px-2
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-amber-500
              hover:text-neutral-950
              hover:shadow-md
              active:translate-y-0
            "
          >
            <span
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              ☎
            </span>

            <span>
              Call
            </span>
          </a>
        )}


        {/* =========================================================
            WHATSAPP
        ========================================================== */}

        {business.whatsapp && (
          <a
            href={`https://wa.me/${String(
              business.whatsapp
            ).replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              min-h-[44px]
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-neutral-200
              bg-white
              px-2
              py-2.5
              text-xs
              font-bold
              text-neutral-900
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-amber-400
              hover:bg-amber-50
              hover:text-amber-700
              hover:shadow-md
              active:translate-y-0
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-neutral-100
                text-[9px]
                font-black
                transition-all
                duration-300
                group-hover:bg-amber-500
                group-hover:text-neutral-950
              "
            >
              W
            </span>

            <span>
              WhatsApp
            </span>
          </a>
        )}


        {/* =========================================================
            DIRECTIONS
        ========================================================== */}

        {business.directionsUrl && (
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              min-h-[44px]
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-neutral-200
              bg-white
              px-2
              py-2.5
              text-xs
              font-bold
              text-neutral-900
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-amber-400
              hover:bg-amber-50
              hover:text-amber-700
              hover:shadow-md
              active:translate-y-0
            "
          >
            <span
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              ●
            </span>

            <span>
              Directions
            </span>
          </a>
        )}

      </div>

    </div>
  )
}

export default StickyContactBar