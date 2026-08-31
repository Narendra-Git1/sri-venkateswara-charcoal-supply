import { Link, useParams } from "react-router-dom"
import { products } from "../../data/products"
import ContactActions from "../../components/contact/ContactActions"

function ProductDetails() {
    const { productId } = useParams()

    const product = products.find(
        (item) => item.id === productId,
    )

    if (!product) {
        return (
            <main className="min-h-screen bg-white px-4 py-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl font-bold text-neutral-950">
                        Product Not Found
                    </h1>

                    <p className="mt-4 text-neutral-600">
                        The product you are looking for does not exist.
                    </p>

                    <Link
                        to="/products"
                        className="mt-8 inline-block rounded-lg bg-neutral-950 px-6 py-3 font-bold text-white"
                    >
                        Back to Products
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="bg-white">
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Back Link */}
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 font-semibold text-neutral-600 transition hover:text-neutral-950"
                    >
                        ← Back to Products
                    </Link>

                    {/* Product */}
                    <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">

                        {/* Image */}
                        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-[420px] w-full object-cover sm:h-[520px]"
                            />
                        </div>

                        {/* Information */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                Charcoal Product
                            </p>

                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                                {product.name}
                            </h1>

                            <p className="mt-6 text-xl leading-8 text-neutral-600">
                                {product.shortDescription}
                            </p>

                            <div className="mt-8 border-t border-neutral-200 pt-8">
                                <h2 className="text-2xl font-bold text-neutral-950">
                                    Product Information
                                </h2>

                                <p className="mt-4 leading-7 text-neutral-600">
                                    {product.description}
                                </p>
                            </div>

                            {/* Applications */}
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-neutral-950">
                                    Applications
                                </h2>

                                <ul className="mt-4 space-y-3">
                                    {product.applications.map((application) => (
                                        <li
                                            key={application}
                                            className="flex items-start gap-3 text-neutral-600"
                                        >
                                            <span className="font-bold text-neutral-950">
                                                ✓
                                            </span>

                                            <span>{application}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Status */}
                            <div className="mt-8">
                                <span className="inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold capitalize text-neutral-800">
                                    {product.status}
                                </span>
                            </div>

                            {/* Enquiry */}
                            <div className="mt-10 space-y-6">
                                <a
                                    href="/#contact"
                                    className="inline-flex rounded-lg bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                                >
                                    Enquire About This Product →
                                </a>

                                <div>
                                    <p className="mb-3 text-sm font-semibold text-neutral-500">
                                        Contact Us
                                    </p>

                                    <ContactActions />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductDetails