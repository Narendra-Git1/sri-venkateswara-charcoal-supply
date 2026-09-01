import { business } from "../../data/business"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Wholesale & Retail", href: "/wholesale-retail" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

function Footer() {
  const whatsappNumber = business.whatsapp
    ? String(business.whatsapp).replace(/\D/g, "")
    : ""

  return (
    <footer className="relative overflow-hidden border-t border-neutral-800 bg-neutral-950 text-white">

      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">


          {/* =====================================================
              BRAND
          ====================================================== */}

          <div className="flex flex-col items-center text-center md:items-start md:text-left">

            {/* Logo + Brand */}

            <a
              href="/"
              className="group inline-flex items-center gap-4"
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-neutral-900
                  shadow-lg
                  ring-1
                  ring-neutral-800
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:ring-amber-500/50
                "
              >
                <img
                  src="/images/venkateswara-navbar.webp"
                  alt="Sri Venkateswara Charcoal Supply"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="leading-tight">

                <div
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-amber-400
                    sm:text-2xl
                  "
                >
                  Sri Venkateswara
                </div>

                <div
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-neutral-500
                  "
                >
                  Charcoal Supply
                </div>

              </div>

            </a>


            {/* Description */}

            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-400">
              Reliable charcoal supply for household, cooking, BBQ,
              commercial, iron heating and grounding requirements.
              We support both retail customers and businesses with
              dependable supply options.
            </p>


            {/* Tagline */}

            <div className="mt-5 border-l-2 border-amber-500 pl-4 text-left">

              <p className="text-sm font-bold text-white">
                Quality You Can Trust.
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Supply You Can Depend On.
              </p>

            </div>


            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="mt-6 w-full">

              <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 md:text-left">
                Connect With Us
              </p>

              <div className="flex items-center justify-center gap-3 md:justify-start">

                {/* Instagram */}

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900
                    text-neutral-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500
                    hover:bg-amber-500
                    hover:text-neutral-950
                    hover:shadow-lg
                    hover:shadow-amber-500/20
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>


                {/* Facebook */}

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900
                    text-neutral-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500
                    hover:bg-amber-500
                    hover:text-neutral-950
                    hover:shadow-lg
                    hover:shadow-amber-500/20
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.668.332-1 1-1Z" />
                  </svg>
                </a>


                {/* WhatsApp */}

                {whatsappNumber && (
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      text-neutral-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-amber-500
                      hover:bg-amber-500
                      hover:text-neutral-950
                      hover:shadow-lg
                      hover:shadow-amber-500/20
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />

                      <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.3.3-2.7-.3-1.1-.5-2.2-1.3-3.1-2.2-.9-.9-1.7-2-2.2-3.1-.6-1.4-.5-2.3-.3-2.7Z" />
                    </svg>
                  </a>
                )}

              </div>

            </div>

          </div>


          {/* =====================================================
              QUICK LINKS
          ====================================================== */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-5 w-1 rounded-full bg-amber-500" />

              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Quick Links
              </h3>

            </div>


            <nav className="mt-5">

              <ul className="space-y-2">

                {quickLinks.map((item) => (
                  <li key={item.label}>

                    <a
                      href={item.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        rounded-md
                        py-1
                        text-sm
                        text-neutral-400
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-amber-400
                      "
                    >

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-neutral-700
                          transition-all
                          duration-300
                          group-hover:bg-amber-500
                        "
                      />

                      {item.label}

                    </a>

                  </li>
                ))}

              </ul>

            </nav>

          </div>


          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-5 w-1 rounded-full bg-amber-500" />

              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Contact Us
              </h3>

            </div>


            <div className="mt-5 space-y-3">


              {/* Phone */}

              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="
                    group
                    block
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900/50
                    p-3
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-amber-500/40
                    hover:bg-neutral-900
                  "
                >

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-neutral-200 transition-colors duration-300 group-hover:text-amber-400">
                    {business.phone}
                  </p>

                </a>
              )}


              {/* WhatsApp */}

              {business.whatsapp && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    block
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900/50
                    p-3
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-amber-500/40
                    hover:bg-neutral-900
                  "
                >

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-neutral-200 transition-colors duration-300 group-hover:text-amber-400">
                    {business.whatsapp}
                  </p>

                </a>
              )}


              {/* Location */}

              {business.address && (
                <div
                  className="
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900/50
                    p-3
                  "
                >

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-5 text-neutral-300">
                    {business.address}
                  </p>

                </div>
              )}


              {/* Business Hours */}

              {business.businessHours && (
                <div
                  className="
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900/50
                    p-3
                  "
                >

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                    Business Hours
                  </p>

                  <p className="mt-1 text-sm text-neutral-300">
                    {business.businessHours}
                  </p>

                </div>
              )}


              {/* Directions */}

              {business.directionsUrl && (
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    pt-1
                    text-sm
                    font-bold
                    text-amber-400
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-amber-300
                  "
                >

                  Get Directions

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </a>
              )}

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          COPYRIGHT
      ========================================================== */}

      <div className="border-t border-neutral-800">

        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 text-center sm:px-6 lg:px-8">

          <p className="text-xs text-neutral-500 sm:text-sm">
            © {new Date().getFullYear()} Sri Venkateswara Charcoal Supply.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer