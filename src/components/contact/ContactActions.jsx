import { business } from "../../data/business"

// =========================================================
// ICONS
// =========================================================

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 3.5h2.1c.5 0 .9.3 1 .8l.8 3.2c.1.4 0 .8-.3 1.1L8.8 10c1 2.1 2.7 3.8 4.8 4.8l1.4-1.4c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8  .5.8 1v2.1c0 .6-.4 1-1 1C11.2 18 6 12.8 6 5.5c0-.6.4-1 1-1Z"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.8 8.2c.2-.2.5-.2.7 0l.8 1c.2.2.2.5 0 .8l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.3-.2.6-.2.8 0l1 .8c.2.2.2.5 0 .7l-.4.5c-.4.5-1 .7-1.6.5-2.8-.9-5-3.1-5.9-5.9-.2-.6 0-1.2.5-1.6l.4-.5Z"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 10.5c0 5.2-8 10-8 10s-8-4.8-8-10a8 8 0 1 1 16 0Z"
      />

      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 10h11"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 5.5 15 10l-4.5 4.5"
      />
    </svg>
  )
}


// =========================================================
// CONTACT ACTIONS
// =========================================================

function ContactActions() {
  const whatsappNumber = String(business.whatsapp || "").replace(
    /\D/g,
    ""
  )

  return (
    <div className="flex flex-wrap gap-3">


      {/* =====================================================
          CALL US
      ====================================================== */}

      {business.phone && (
        <a
          href={`tel:${business.phone}`}
          aria-label={`Call ${business.phone}`}
          className="
            group/call
            inline-flex
            items-center
            justify-center
            gap-2.5
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
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
            focus:ring-offset-2
          "
        >

          {/* Icon */}

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-white/10
              transition-all
              duration-300
              group-hover/call:bg-neutral-950/10
            "
          >
            <PhoneIcon />
          </span>


          {/* Text */}

          <span>
            Call Us
          </span>


          {/* Arrow */}

          <span
            className="
              transition-transform
              duration-300
              group-hover/call:translate-x-1
            "
          >
            <ArrowIcon />
          </span>

        </a>
      )}


      {/* =====================================================
          WHATSAPP
      ====================================================== */}

      {business.whatsapp && (
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Contact ${business.whatsapp} on WhatsApp`}
          className="
            group/whatsapp
            inline-flex
            items-center
            justify-center
            gap-2.5
            rounded-xl
            border
            border-neutral-200
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
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
            focus:ring-offset-2
          "
        >

          {/* Icon */}

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-neutral-950
              text-white
              transition-all
              duration-300
              group-hover/whatsapp:bg-amber-500
              group-hover/whatsapp:text-neutral-950
            "
          >
            <WhatsAppIcon />
          </span>


          {/* Text */}

          <span>
            WhatsApp
          </span>


          {/* Arrow */}

          <span
            className="
              text-neutral-400
              transition-all
              duration-300
              group-hover/whatsapp:translate-x-1
              group-hover/whatsapp:text-amber-600
            "
          >
            <ArrowIcon />
          </span>

        </a>
      )}


      {/* =====================================================
          GET DIRECTIONS
      ====================================================== */}

      {business.directionsUrl && (
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Get directions to Sri Venkateswara Charcoal Supply"
          className="
            group/directions
            inline-flex
            items-center
            justify-center
            gap-2.5
            rounded-xl
            border
            border-neutral-200
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
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
            focus:ring-offset-2
          "
        >

          {/* Icon */}

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-neutral-950
              text-white
              transition-all
              duration-300
              group-hover/directions:bg-amber-500
              group-hover/directions:text-neutral-950
            "
          >
            <LocationIcon />
          </span>


          {/* Text */}

          <span>
            Get Directions
          </span>


          {/* Arrow */}

          <span
            className="
              text-neutral-400
              transition-all
              duration-300
              group-hover/directions:translate-x-1
              group-hover/directions:text-amber-600
            "
          >
            <ArrowIcon />
          </span>

        </a>
      )}

    </div>
  )
}

export default ContactActions