import SectionHeading from "../../components/common/SectionHeading"

function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ABOUT US"
          title="Reliable Charcoal Supply"
          description="Sri Venkateswara Charcoal Supply provides charcoal solutions for household, cooking, commercial, BBQ and grounding requirements."
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="text-2xl font-bold text-neutral-950">
              Quality Products
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              We focus on supplying suitable charcoal products for different
              customer and business requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-950 p-8 text-white">
            <h3 className="text-2xl font-bold">
              Reliable Supply
            </h3>

            <p className="mt-4 leading-7 text-neutral-300">
              Our goal is to provide dependable charcoal supply for both
              retail customers and businesses requiring larger quantities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About