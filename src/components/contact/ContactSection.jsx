import SectionHeading from "../common/SectionHeading"
import ContactActions from "./ContactActions"
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
        d="M6.6 3.5h2.1c.5 0 .9.3 1 .8l.8 3.2c.1.4 0 .8-.3 1.1L8.8 10c1 2.1 2.7 3.8 4.8 4.8l1.4-1.4c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8.5.8 1v2.1c0 .6-.4 1-1 1C11.2 18 6 12.8 6 5.5c0-.6.4-1 1-1Z"
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

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5v5l3.2 2"
      />
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
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
      />
    </svg>
  )
}

// =========================================================
// CONTACT SECTION
// =========================================================

function ContactSection() {
  const whatsappNumber = String(business.whatsapp || "").replace(/\D/g, "")

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-neutral-50
        py-16
        sm:py-20
        lg:py-24
      "
    >

      {/* =====================================================
          BACKGROUND ACCENTS
      ====================================================== */}

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
          bottom-10
          h-96
          w-96
          rounded-full
          bg-neutral-900/5
          blur-3xl
        "
      />


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Discuss Your Charcoal Requirement"
          description="Contact us for product enquiries, retail requirements, wholesale quantities and commercial requirements."
          align="center"
        />


        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">


          {/* ===================================================
              CONTACT INFORMATION CARD
          ==================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-neutral-200
              bg-white
              p-7
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-amber-400/60
              hover:shadow-xl
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
                bg-amber-500
                transition-all
                duration-300
                group-hover:h-1.5
              "
            />


            {/* Header */}

            <div className="flex items-start justify-between gap-4">

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
                  Get In Touch
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
                  Contact Information
                </h2>

              </div>


              {/* Header Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-neutral-950
                  text-amber-400
                  transition-all
                  duration-300
                  group-hover:rotate-3
                  group-hover:bg-amber-500
                  group-hover:text-neutral-950
                "
              >
                <PhoneIcon />
              </div>

            </div>


            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-neutral-600
              "
            >
              Tell us what type of charcoal you need and the required
              quantity. We will help you choose the appropriate supply
              option for your requirement.
            </p>


            {/* =================================================
                CONTACT DETAILS
            ================================================== */}

            <div className="mt-8 space-y-3">


              {/* Phone */}

              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="
                    group/item
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-neutral-200
                    bg-neutral-50
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-amber-400/60
                    hover:bg-amber-50
                    hover:shadow-md
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-neutral-950
                      text-white
                      transition-all
                      duration-300
                      group-hover/item:scale-105
                      group-hover/item:bg-amber-500
                      group-hover/item:text-neutral-950
                    "
                  >
                    <PhoneIcon />
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-neutral-400
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-sm
                        font-semibold
                        text-neutral-950
                        transition-colors
                        duration-300
                        group-hover/item:text-amber-600
                      "
                    >
                      {business.phone}
                    </p>

                  </div>

                  <span
                    className="
                      ml-auto
                      text-neutral-300
                      transition-all
                      duration-300
                      group-hover/item:translate-x-1
                      group-hover/item:text-amber-500
                    "
                  >
                    <ArrowIcon />
                  </span>

                </a>
              )}


              {/* WhatsApp */}

              {business.whatsapp && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group/item
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-neutral-200
                    bg-neutral-50
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-amber-400/60
                    hover:bg-amber-50
                    hover:shadow-md
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-neutral-950
                      text-white
                      transition-all
                      duration-300
                      group-hover/item:scale-105
                      group-hover/item:bg-amber-500
                      group-hover/item:text-neutral-950
                    "
                  >
                    <WhatsAppIcon />
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-neutral-400
                      "
                    >
                      WhatsApp
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-sm
                        font-semibold
                        text-neutral-950
                        transition-colors
                        duration-300
                        group-hover/item:text-amber-600
                      "
                    >
                      {business.whatsapp}
                    </p>

                  </div>

                  <span
                    className="
                      ml-auto
                      text-neutral-300
                      transition-all
                      duration-300
                      group-hover/item:translate-x-1
                      group-hover/item:text-amber-500
                    "
                  >
                    <ArrowIcon />
                  </span>

                </a>
              )}


              {/* Location */}

              <div
                className="
                  group/item
                  flex
                  items-start
                  gap-4
                  rounded-xl
                  border
                  border-neutral-200
                  bg-neutral-50
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-amber-400/60
                  hover:bg-amber-50
                  hover:shadow-md
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-neutral-950
                    text-white
                    transition-all
                    duration-300
                    group-hover/item:scale-105
                    group-hover/item:bg-amber-500
                    group-hover/item:text-neutral-950
                  "
                >
                  <LocationIcon />
                </div>

                <div className="min-w-0">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-neutral-400
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      leading-6
                      text-neutral-950
                    "
                  >
                    {business.address || "To be confirmed"}
                  </p>

                </div>

              </div>


              {/* Business Hours */}

              <div
                className="
                  group/item
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-neutral-200
                  bg-neutral-50
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-amber-400/60
                  hover:bg-amber-50
                  hover:shadow-md
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-neutral-950
                    text-white
                    transition-all
                    duration-300
                    group-hover/item:scale-105
                    group-hover/item:bg-amber-500
                    group-hover/item:text-neutral-950
                  "
                >
                  <ClockIcon />
                </div>

                <div className="min-w-0">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-neutral-400
                    "
                  >
                    Business Hours
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-neutral-950
                    "
                  >
                    {business.businessHours || "To be confirmed"}
                  </p>

                </div>

              </div>

            </div>


            {/* Contact Actions */}

            <div
              className="
                mt-7
                [&_a]:transition-all
                [&_a]:duration-300
                [&_a:hover]:-translate-y-1
                [&_a:hover]:border-amber-400
                [&_a:hover]:bg-amber-400
                [&_a:hover]:text-neutral-950
                [&_a:hover]:shadow-lg
                [&_a:hover]:shadow-amber-500/20
              "
            >
              <ContactActions />
            </div>

          </div>


          {/* ===================================================
              ENQUIRY FORM CARD
          ==================================================== */}

          <div
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
              hover:-translate-y-1
              hover:shadow-2xl
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
                bg-amber-500
                transition-all
                duration-300
                group-hover:h-1.5
              "
            />


            {/* Background Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-amber-500/10
                blur-3xl
              "
            />


            <div className="relative">

              {/* Heading */}

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-amber-400
                "
              >
                Send An Enquiry
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-bold
                  tracking-tight
                  sm:text-3xl
                "
              >
                Tell Us What You Need
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-neutral-400
                "
              >
                Share your requirement, quantity and contact details.
                We'll discuss the suitable supply option with you.
              </p>


              {/* =================================================
                  FORM
              ================================================== */}

              <form className="mt-8 space-y-5">

                {/* Name */}

                <div>

                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-neutral-300
                    "
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-neutral-700
                      bg-neutral-900
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-neutral-600
                      hover:border-neutral-500
                      focus:border-amber-500
                      focus:ring-1
                      focus:ring-amber-500
                    "
                  />

                </div>


                {/* Phone */}

                <div>

                  <label
                    htmlFor="contact-phone"
                    className="
                      mb-2
                      block
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-neutral-300
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-neutral-700
                      bg-neutral-900
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-neutral-600
                      hover:border-neutral-500
                      focus:border-amber-500
                      focus:ring-1
                      focus:ring-amber-500
                    "
                  />

                </div>


                {/* Requirement */}

                <div>

                  <label
                    htmlFor="contact-requirement"
                    className="
                      mb-2
                      block
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-neutral-300
                    "
                  >
                    Requirement
                  </label>

                  <textarea
                    id="contact-requirement"
                    name="requirement"
                    rows="5"
                    placeholder="Tell us what charcoal you need and the quantity..."
                    required
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-neutral-700
                      bg-neutral-900
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-neutral-600
                      hover:border-neutral-500
                      focus:border-amber-500
                      focus:ring-1
                      focus:ring-amber-500
                    "
                  />

                </div>


                {/* Submit Button */}

                <button
                  type="submit"
                  className="
                    group/button
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-amber-500
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-neutral-950
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-amber-400
                    hover:shadow-lg
                    hover:shadow-amber-500/20
                    active:translate-y-0
                  "
                >
                  <span>Submit Enquiry</span>

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                  >
                    <ArrowIcon />
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactSection