import SectionHeading from "../common/SectionHeading"

function WholesaleSection() {
  return (
    <section
      id="wholesale"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Wholesale & Retail"
          title="Charcoal Supply for Every Customer"
          description="Whether you need charcoal for your home or require larger quantities for your business, we can support your requirements."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Retail */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-xl font-bold text-white">
              R
            </div>

            <h3 className="mt-6 text-2xl font-bold text-neutral-950">
              Retail Supply
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              Suitable for individual customers looking for charcoal
              for household, cooking, BBQ and other requirements.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                Household requirements
              </li>

              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                Cooking requirements
              </li>

              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                BBQ requirements
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Enquire for Retail
            </a>
          </div>

          {/* Wholesale */}
          <div className="rounded-2xl bg-neutral-950 p-8 text-white sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-neutral-950">
              W
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Wholesale Supply
            </h3>

            <p className="mt-4 leading-7 text-neutral-300">
              Suitable for businesses and customers requiring charcoal
              in larger quantities for ongoing requirements.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-300">
              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Bulk requirements
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Commercial requirements
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Business enquiries
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Enquire for Wholesale
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WholesaleSection