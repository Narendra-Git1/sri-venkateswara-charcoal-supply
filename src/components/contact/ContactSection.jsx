import SectionHeading from "../common/SectionHeading"

function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Discuss Your Charcoal Requirement"
          description="Contact us for product enquiries, retail requirements, wholesale quantities and commercial requirements."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-neutral-950">
              Get in Touch
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              Tell us what type of charcoal you need and the required
              quantity. We will help you with the appropriate supply option.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Phone
                </p>
                <p className="mt-1 text-lg font-medium text-neutral-950">
                  To be confirmed
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  WhatsApp
                </p>
                <p className="mt-1 text-lg font-medium text-neutral-950">
                  To be confirmed
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Location
                </p>
                <p className="mt-1 text-lg font-medium text-neutral-950">
                  To be confirmed
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Business Hours
                </p>
                <p className="mt-1 text-lg font-medium text-neutral-950">
                  To be confirmed
                </p>
              </div>

            </div>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-2xl bg-neutral-950 p-8 text-white sm:p-10">
            <h3 className="text-2xl font-bold">
              Send an Enquiry
            </h3>

            <p className="mt-4 text-neutral-300">
              Share your requirement and we can discuss the suitable supply
              option.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="requirement"
                  className="mb-2 block text-sm font-medium"
                >
                  Requirement
                </label>

                <textarea
                  id="requirement"
                  rows="5"
                  placeholder="Tell us what charcoal you need and the quantity..."
                  className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-white px-6 py-3 font-bold text-neutral-950 transition hover:bg-neutral-200"
              >
                Submit Enquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection