import SectionHeading from "../../components/common/SectionHeading"

const galleryImages = [
    {
        id: "iron-charcoal",
        name: "Iron Charcoal",
        image: "/images/iron-charcoal.jpg",
    },
    {
        id: "grounding-charcoal",
        name: "Grounding Charcoal",
        image: "/images/grounding-charcoal.jpg",
    },
    {
        id: "tandoor-charcoal",
        name: "Tandoor Charcoal",
        image: "/images/tandoor-charcoal.jpg",
    },
    {
        id: "bbq-charcoal",
        name: "BBQ Charcoal",
        image: "/images/bbq-charcoal.jpg",
    },
]

function Gallery() {
    return (
        <main>
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeading
                        eyebrow="GALLERY"
                        title="Our Charcoal Products"
                        description="Explore our charcoal products and applications."
                        align="center"
                    />

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {galleryImages.map((item) => (
                            <div
                                key={item.id}
                                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <h2 className="text-xl font-bold text-neutral-950">
                                        {item.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Gallery