import SectionHeading from "../../components/common/SectionHeading"

function WholesaleRetail() {
    return (
        <main>
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeading
                        eyebrow="WHOLESALE & RETAIL"
                        title="Charcoal Supply for Every Requirement"
                        description="We support retail customers and businesses with charcoal supply for different requirements."
                        align="center"
                    />

                    <div className="mt-12 grid gap-8 lg:grid-cols-2">

                        {/* Retail */}
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-xl font-bold text-white">
                                R
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-neutral-950">
                                Retail Supply
                            </h2>

                            <p className="mt-4 leading-7 text-neutral-600">
                                Retail supply is suitable for customers who require
                                charcoal for household, cooking, BBQ and other
                                individual requirements.
                            </p>

                            <ul className="mt-6 space-y-3 text-neutral-700">
                                <li>✓ Household requirements</li>
                                <li>✓ Cooking requirements</li>
                                <li>✓ BBQ requirements</li>
                            </ul>

                            <a
                                href="/contact"
                                className="mt-8 inline-flex rounded-lg bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
                            >
                                Enquire for Retail
                            </a>
                        </div>

                        {/* Wholesale */}
                        <div className="rounded-2xl bg-neutral-950 p-8 text-white sm:p-10">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-neutral-950">
                                W
                            </div>

                            <h2 className="mt-6 text-2xl font-bold">
                                Wholesale Supply
                            </h2>

                            <p className="mt-4 leading-7 text-neutral-300">
                                Wholesale supply is suitable for businesses and
                                customers requiring charcoal in larger quantities
                                for ongoing requirements.
                            </p>

                            <ul className="mt-6 space-y-3 text-neutral-300">
                                <li>✓ Bulk requirements</li>
                                <li>✓ Commercial requirements</li>
                                <li>✓ Business enquiries</li>
                            </ul>

                            <a
                                href="/contact"
                                className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-200"
                            >
                                Enquire for Wholesale
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default WholesaleRetail