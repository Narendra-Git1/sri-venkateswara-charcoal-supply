import SectionHeading from "./SectionHeading"

const features = [
  {
    title: "Quality Products",
    description:
      "Charcoal products selected to support different household, cooking, commercial and grounding requirements.",
  },
  {
    title: "Wholesale & Retail",
    description:
      "Supply options for both individual customers and businesses requiring charcoal in larger quantities.",
  },
  {
    title: "Reliable Supply",
    description:
      "A dependable charcoal supply approach for customers who need consistent product availability.",
  },
  {
    title: "Customer Support",
    description:
      "Easy contact options to help customers enquire about products, quantities and requirements.",
  },
]

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Why Choose Us"
          title="Quality Charcoal. Reliable Supply."
          description="We focus on providing charcoal products for different customer and business requirements."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-lg font-bold text-white">
                ✓
              </div>

              <h3 className="mt-5 text-lg font-bold text-neutral-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs