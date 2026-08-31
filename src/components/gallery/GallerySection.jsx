import SectionHeading from "../common/SectionHeading"

const galleryImages = [
  {
    src: "/images/iron-charcoal.jpg",
    alt: "Iron Charcoal",
  },
  {
    src: "/images/grounding-charcoal.jpg",
    alt: "Grounding Charcoal",
  },
  {
    src: "/images/tandoor-charcoal.jpg",
    alt: "Tandoor Charcoal",
  },
  {
    src: "/images/bbq-charcoal.jpg",
    alt: "BBQ Charcoal",
  },
]

function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-neutral-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Gallery"
          title="Our Charcoal Products"
          description="Take a look at our charcoal products and applications."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="font-bold text-neutral-950">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default GallerySection