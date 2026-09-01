import { business } from "../../data/business"

function ContactActions() {
  return (
    <div className="flex flex-wrap gap-3">

      {/* =========================================================
          CALL
      ========================================================== */}

      {business.phone && (
        <a
          href={`tel:${business.phone}`}
          className="
            group/call
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-neutral-950
            px-5
            py-3
            text-sm
            font-bold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-amber-500
            hover:text-neutral-950
            hover:shadow-lg
            hover:shadow-amber-500/20
            active:translate-y-0
          "
        >
          <span
            className="
              transition-transform
              duration-300
              group-hover/call:scale-110
            "
          >
            ☎
          </span>

          <span>
            Call Us
          </span>

          <span
            className="
              transition-transform
              duration-300
              group-hover/call:translate-x-1
            "
          >
            →
          </span>
        </a>
      )}


      {/* =========================================================
          WHATSAPP
      ========================================================== */}

      {business.whatsapp && (
        <a
          href={`https://wa.me/${String(business.whatsapp).replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="
            group/whatsapp
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-neutral-300
            bg-white
            px-5
            py-3
            text-sm
            font-bold
            text-neutral-900
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-amber-400
            hover:bg-amber-50
            hover:text-amber-700
            hover:shadow-lg
            hover:shadow-amber-500/10
            active:translate-y-0
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-neutral-100
              text-[10px]
              font-black
              transition-all
              duration-300
              group-hover/whatsapp:bg-amber-500
              group-hover/whatsapp:text-neutral-950
            "
          >
            W
          </span>

          <span>
            WhatsApp
          </span>

          <span
            className="
              text-neutral-400
              transition-all
              duration-300
              group-hover/whatsapp:translate-x-1
              group-hover/whatsapp:text-amber-600
            "
          >
            →
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
            group/directions
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-neutral-300
            bg-white
            px-5
            py-3
            text-sm
            font-bold
            text-neutral-900
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-amber-400
            hover:bg-amber-50
            hover:text-amber-700
            hover:shadow-lg
            hover:shadow-amber-500/10
            active:translate-y-0
          "
        >
          <span
            className="
              transition-transform
              duration-300
              group-hover/directions:scale-110
            "
          >
            ●
          </span>

          <span>
            Get Directions
          </span>

          <span
            className="
              text-neutral-400
              transition-all
              duration-300
              group-hover/directions:translate-x-1
              group-hover/directions:text-amber-600
            "
          >
            →
          </span>
        </a>
      )}

    </div>
  )
}

export default ContactActions